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
- No K/P dibaca daripada kolum ketiga tab kedua dan hanya dipaparkan selepas pengesahan admin.

Mod admin GitHub telah dikonfigurasi menggunakan pengesahan hash SHA-256 dalam pelayar.

Fail admin:
- google-apps-script-admin-template.gs

Kata laluan admin asal telah dikonfigurasi dalam bentuk hash SHA-256. Nilai teks biasa
tidak disimpan dalam fail GitHub. Fail Apps Script disertakan sebagai pilihan untuk
peningkatan keselamatan pada masa hadapan.

CARA PUBLISH KE GITHUB PAGES
1. Muat naik semua kandungan folder GitHub ke repository.
2. Pastikan fail utama bernama index.html dan berada di root repository.
3. Buka Settings > Pages.
4. Pilih Deploy from a branch, branch main dan folder /(root).
5. Simpan dan tunggu pautan GitHub Pages disediakan.

CARA AKTIFKAN ADMIN
1. Tekan butang Admin pada sistem.
2. Masukkan kata laluan admin.
3. Selepas pengesahan berjaya, No K/P penuh akan dipaparkan pada kad murid.
4. Tekan Log Keluar untuk menyembunyikan semula No K/P.

Nota privasi:
- Versi GitHub membaca tab kedua yang sedang diterbitkan sebagai CSV awam. Sesiapa yang mengetahui URL CSV berpotensi membaca datanya di luar sistem.
- Untuk tahap keselamatan lebih tinggi, gunakan fail Apps Script dan jadikan tab No K/P tidak diterbitkan secara awam.
- Spreadsheet ID 1xMsTSwR7p6IMZiehyn4vL962kKh4PcchtPmzzpnMAV8 dan GID 1605065552 telah dimasukkan dalam fail .gs.
- Apps Script membaca tab sensitif terus melalui SpreadsheetApp selepas pengesahan admin.
