/*
  Template Google Apps Script untuk Sistem Carian Pelajar.

  Cara guna ringkas:
  1. Buka script.google.com dan cipta project baharu.
  2. Tampal keseluruhan fail ini.
  3. Pergi ke Project Settings > Script Properties dan tambah:
     ADMIN_PASSWORD = kata laluan admin sebenar
  4. Deploy > New deployment > Web app.
     Execute as: Me
     Who has access: Anyone with the link
  5. Masukkan URL Web App ke `appsScriptUrl` dalam fail HTML.

  Jangan simpan kata laluan admin di dalam HTML atau JavaScript bahagian hadapan.
*/

const SESSION_MINUTES = 15;
const TOKEN_PREFIX = "scp_admin_";
const SPREADSHEET_ID = "1xMsTSwR7p6IMZiehyn4vL962kKh4PcchtPmzzpnMAV8";
const SENSITIVE_SHEET_GID = 1605065552;
const DEFAULT_ADMIN_PASSWORD_SHA256 = "61c52584348c891ffaf15c945e9cbe58e8235c4024e4a2a5265445e12b57ce7d";

function doPost(event) {
  try {
    const payload = JSON.parse((event.postData && event.postData.contents) || "{}");
    const action = String(payload.action || "").trim();

    if (action === "login") {
      return jsonResponse(handleLogin(payload.password));
    }

    if (action === "getSensitiveData") {
      return jsonResponse(handleSensitiveData(payload.token));
    }

    if (action === "logout") {
      return jsonResponse(handleLogout(payload.token));
    }

    return jsonResponse({ ok: false, message: "Tindakan tidak sah." }, 400);
  } catch (error) {
    return jsonResponse({
      ok: false,
      message: "Permintaan tidak dapat diproses.",
      detail: String(error && error.message ? error.message : error)
    }, 500);
  }
}

function handleLogin(password) {
  const properties = PropertiesService.getScriptProperties();
  const adminPassword = properties.getProperty("ADMIN_PASSWORD");

  const passwordIsValid = adminPassword
    ? String(password || "") === adminPassword
    : sha256(String(password || "")) === DEFAULT_ADMIN_PASSWORD_SHA256;

  if (!passwordIsValid) {
    return { ok: false, message: "Kata laluan admin salah." };
  }

  const token = TOKEN_PREFIX + Utilities.getUuid();
  CacheService.getScriptCache().put(token, "valid", SESSION_MINUTES * 60);

  return {
    ok: true,
    token: token,
    expiresInMinutes: SESSION_MINUTES,
    sensitiveRecords: getSensitiveRecords()
  };
}

function sha256(value) {
  const digest = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    value,
    Utilities.Charset.UTF_8
  );
  return digest.map(function(byte) {
    const normalized = byte < 0 ? byte + 256 : byte;
    return ("0" + normalized.toString(16)).slice(-2);
  }).join("");
}

function handleSensitiveData(token) {
  if (!isValidToken(token)) {
    return { ok: false, message: "Sesi admin tamat atau tidak sah." };
  }

  CacheService.getScriptCache().put(token, "valid", SESSION_MINUTES * 60);

  return {
    ok: true,
    sensitiveRecords: getSensitiveRecords()
  };
}

function handleLogout(token) {
  if (token) {
    CacheService.getScriptCache().remove(String(token));
  }

  return { ok: true };
}

function isValidToken(token) {
  const value = String(token || "");
  return value.indexOf(TOKEN_PREFIX) === 0 && CacheService.getScriptCache().get(value) === "valid";
}

function getSensitiveRecords() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheets().find(function(item) {
    return item.getSheetId() === SENSITIVE_SHEET_GID;
  });

  if (!sheet) {
    throw new Error("Tab data sensitif dengan GID " + SENSITIVE_SHEET_GID + " tidak dijumpai.");
  }

  const rows = sheet.getDataRange().getDisplayValues().filter(function(row) {
    return row.some(function(cell) {
      return String(cell || "").trim() !== "";
    });
  });

  if (rows.length < 2) {
    return [];
  }

  const headers = rows[0].map(normalizeHeader);
  const nameIndex = headers.indexOf("nama murid");
  const icIndex = headers.indexOf("no k/p");
  const houseIndex = headers.indexOf("rumah sukan");

  if (nameIndex === -1) {
    throw new Error("Kolum Nama Murid tidak dijumpai dalam CSV sensitif.");
  }

  return rows.slice(1).map(function(row) {
    return {
      "Nama Murid": row[nameIndex] || "",
      "No K/P": icIndex >= 0 ? (row[icIndex] || "") : "",
      "Rumah Sukan": houseIndex >= 0 ? (row[houseIndex] || "") : ""
    };
  }).filter(function(record) {
    return String(record["Nama Murid"] || "").trim() !== "";
  });
}

function normalizeHeader(value) {
  return String(value || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function jsonResponse(payload, statusCode) {
  const output = ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);

  return output;
}
