SISTEM CARIAN PELAJAR - SEKOLAH KEBANGSAAN SUNGAI TIRAM

Fail utama:
- sistem-carian-pelajar-standalone.html

Fail ini ialah versi satu fail yang mengandungi HTML, CSS dan JavaScript.
Ia sesuai untuk dimuat naik semula ke ChatGPT, Canva Code atau Gemini Canvas untuk diedit.

Nama sekolah, kod sekolah JBA1021, lencana dan kedua-dua URL CSV telah dimasukkan.

Sebelum menggunakan mod admin, gantikan placeholder berikut dalam fail HTML:
- [MASUKKAN URL WEB APP GOOGLE APPS SCRIPT]

Fail admin:
- google-apps-script-admin-template.gs

Kata laluan admin asal telah dikonfigurasi dalam bentuk hash SHA-256. Nilai teks biasa
tidak disimpan dalam fail GitHub. Kata laluan boleh ditukar kemudian dengan menetapkan
Script Property bernama ADMIN_PASSWORD.

Gunakan fail .gs ini di Google Apps Script supaya kata laluan admin dan data sensitif
tidak disimpan di dalam JavaScript bahagian hadapan.

CARA PUBLISH KE GITHUB PAGES
1. Muat naik semua kandungan folder GitHub ke repository.
2. Pastikan fail utama bernama index.html dan berada di root repository.
3. Buka Settings > Pages.
4. Pilih Deploy from a branch, branch main dan folder /(root).
5. Simpan dan tunggu pautan GitHub Pages disediakan.

CARA AKTIFKAN ADMIN
1. Buka script.google.com dan cipta projek baharu.
2. Tampal kandungan google-apps-script-admin-template.gs.
3. Deploy sebagai Web App: Execute as Me; Who has access: Anyone.
4. Salin URL /exec yang diberikan.
5. Dalam index.html, gantikan [MASUKKAN URL WEB APP GOOGLE APPS SCRIPT] dengan URL /exec itu.
6. Commit semula index.html ke GitHub.

Nota privasi:
- Data No K/P tidak patut diletakkan dalam CSV awam. Nyahterbitkan tab kedua selepas Apps Script siap diuji.
- Simpan kata laluan admin sebagai Script Properties bernama ADMIN_PASSWORD.
- Spreadsheet ID 1xMsTSwR7p6IMZiehyn4vL962kKh4PcchtPmzzpnMAV8 dan GID 1605065552 telah dimasukkan dalam fail .gs.
- Apps Script membaca tab sensitif terus melalui SpreadsheetApp selepas pengesahan admin.
