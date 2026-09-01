SISTEM CARIAN PELAJAR - SEKOLAH KEBANGSAAN SUNGAI TIRAM

Fail utama:
- sistem-carian-pelajar-standalone.html

Fail ini ialah versi satu fail yang mengandungi HTML, CSS dan JavaScript.
Ia sesuai untuk dimuat naik semula ke ChatGPT, Canva Code atau Gemini Canvas untuk diedit.

Nama sekolah, kod sekolah JBA1021, lencana dan kedua-dua URL CSV telah dimasukkan.

Kaedah penggabungan data:
- Tab KELAS DAN NAMA MURID menjadi sumber rekod utama.
- Sistem menormalkan huruf, ruang dan aksara tersembunyi pada Nama Murid.
- Rumah Sukan dipadankan daripada tab NAMA MURID, RUMAH SUKAN DAN NO K/P hanya apabila nama sama.
- No K/P hanya dimasukkan ke paparan selepas pengesahan admin.

URL Google Apps Script telah dimasukkan dan mod admin telah dikonfigurasi.

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
4. URL /exec telah dimasukkan dalam index.html. Jika Apps Script dideploy semula,
   gantikan appsScriptUrl dengan URL deployment yang terbaharu.
5. Commit semula index.html ke GitHub jika URL deployment berubah.

Nota privasi:
- Data No K/P tidak patut diletakkan dalam CSV awam. Nyahterbitkan tab kedua selepas Apps Script siap diuji.
- Simpan kata laluan admin sebagai Script Properties bernama ADMIN_PASSWORD.
- Spreadsheet ID 1xMsTSwR7p6IMZiehyn4vL962kKh4PcchtPmzzpnMAV8 dan GID 1605065552 telah dimasukkan dalam fail .gs.
- Apps Script membaca tab sensitif terus melalui SpreadsheetApp selepas pengesahan admin.
