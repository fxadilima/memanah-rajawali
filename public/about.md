# About

**Web App** ini berisi **Dokumen Markdown** yang ditulis dalam bahasa Indonesia, dan adalah hasil 
saduran pribadi saya berdasarkan versi terjemahan bahasa Inggris Novel Klasik karya Louis Cha (Jin Yong) 
'She Diao Ying Xiong Zhuan' (射鵰英雄傳) — Eagle Shooting Heroes — atau lebih populer di Indonesia
dengan judul klasik 'The Legend of The Condor Heroes'.

Saya berusaha menulisnya sedemikian rupa sehingga _format_ dari tulisan ini akan lebih mudah diadaptasikan
dalam berbagai aplikasi di luar **GitHub**, atau bahkan bisa dibaca tanpa bantuan sebuah **HTTP Server**
dari dalam sebuah Web Browser, tetapi upaya tersebut sungguh tidak mudah dilakukan. Yang bisa saya lakukan
hanyalah mempertahankan supaya teks inti yang berisi cerita itu sendiri tidak terlalu banyak mengandung format
yang akan menimbulkan kesulitan besar jika suatu saat nanti orang ingin menampilkannya dengan cara lain.

Karena bahasa asli cerita tersebut adalah bahasa Mandarin — dan ini adalah sebuah cerita silat — maka sangat
wajar kalau di dalamnya terdapat banyak istilah-istilah _asli_ yang ditulis dalam ejaan latin (proses demikian
dikenal sebagai _romanisasi_), misalnya istilah dalam judul di atas, 'Ying Xiong', yang aslinya ditulis
英雄, dalam konteks tertentu — misalnya dalam sebuah dialog — akan jauh lebih bermakna kalau tetap ditulis
'Ying Xiong' ketimbang diterjemahkan menjadi 'Pahlawan'. Tetapi di saat lain, kita akan lebih leluasa memakai
istilah 'Pendekar', meskipun tetap _bukan_ 'Pahlawan' — seperti arti literalnya.

Untuk memperjelas makna, seringkali kita perlu menyelipkan sebuah _tautan_, sehingga pembaca bisa melompat
ke suatu blok yang berisi penjelasan dari sebuah istilah. Misalnya, istilah Pendekar[^yingxiong] yang saya tuliskan
di sini, penjelasannya dituliskan di lokasi terpisah dengan cara sebagai berikut.

```markdown

[^yingxiong]:
    Ying Xiong (英雄), dalam konteks cerita silat umumnya bermakna 
    'Pendekar', meskipun arti literalnya adalah 'Pahlawan'.

```

Sedangkan teks intinya saya tulis demikian.

```markdown

Misalnya, istilah Pendekar[^yingxiong] yang saya tuliskan di sini,
penjelasannya dituliskan di lokasi terpisah dengan cara sebagai berikut.

```

Cara tersebut sangat praktis, karena tulisan kita yang berisi inti cerita tidak terganggu dan relatif _bersih_.
Tetapi sayangnya hal ini menimbulkan kesulitan tertentu. Gaya penulisan _markdown_ seperti ini hanya didukung
oleh **GitHub**, dan tidak dianggap sebagai bagian _formal_ dari _format markdown_ secara keseluruhan. Dengan
demikian sebagian besar perangkat lunak yang bertugas melakukan transformasi format dari _markdown_ menjadi
HTML tidak mengenalinya. Memang ada sebuah _plugin_ bagi **MarkedJS** untuk mengatasi hal ini, tetapi tetaplah
bukan sepenuhnya kompatibel dengan **GitHub**. Untuk mengatasi hal ini kita bisa mengganti blok berisi penjelasan
dengan sebuah blok **HTML**. Tetapi ini akan membuat tulisan kita menjadi agak berantakan. Lebih jauh lagi,
di banyak tempat saya menyertakan _tautan_ berisi klip video tertentu sebagai ilustrasi, dan ini adalah
dalam bentuk blok HTML, karena agak sulit mengatur _tautan_ video dengan gambar dalam _markdown_. Blok HTML
membuatnya tampil lebih baik, tetapi **GitHub** menampilkannya tanpa menyertakan _styling_ yang saya inginkan,
dan tidak ada cara yang sederhana untuk menuliskan _inline styling_. Lalu saya mulai berpikir untuk melupakan
cara yang bertele-tele ini, karena akhirnya akan menghambat proses terjemahan itu sendiri. Tetapi semua ini 
ditempatkan di **GitHub** adalah untuk digunakan dengan berbagai cara, bukan _hanya_ melalui **GitHub** sendiri.

Ini akhirnya memaksa saya untuk menulis beberapa versi dengan format yang agak berbeda, meskipun inti ceritanya
tetap sama. Hal inilah yang saat ini sedang saya upayakan, dengan penekanan utama, tentunya, adalah segera
menyelesaikan terjemahan itu sendiri.

Di jaman modern ini, kita bisa bercerita dengan aneka macam cara, yang paling umum saat ini adalah melalui
_video_, dan cerita ini sendiri juga sudah banyak diadaptasikan dalam bentuk drama televisi atau film layar
lebar, bahkan kita bisa mengaksesnya dengan bebas di YouTube. Kendatipun demikian, ada terlalu banyak aspek
yang tidak dapat dicakup oleh sebuah upaya visualisasi melalui _gambar_ dan _video_. Banyak narasi yang tidak
dapat ditampilkan dengan tepat, atau bahkan banyak _alur cerita_ yang dengan sengaja dibuat berbeda dari cerita
aslinya — dengan suatu alasan yang barangkali bisa dimengerti. Padahal, kalau narasi-narasi ini _hilang_, maka
para penonton drama tersebut akan gagal memahami apa sesungguhnya yang ingin disampaikan oleh pengarang cerita.
Hal inilah yang membuat cerita berupa teks akan tetap diminati orang sampai kapan pun. Hanya saja, di era modern
ini, kita dilengkapi dengan segudang teknologi canggih untuk menggabungkan semuanya sekaligus. Sayang sekali
kalau membuang salah satu aspek yang _sungguh_ bermanfaat.

## Menampilkan Cerita

Anda bisa membaca teks berisi cerita tersebut secara langsung dari dalam GitHub, bahkan tanpa harus melakukan
pendaftaran sebagai _member_ apa pun juga, tanpa melakukan _cloning_, atau mengunduh apa pun. Semuanya saya tempatkan
di dalam direktori 'Book1', dengan nama file 'intro.md', 'bab1.md', 'bab2.md', dst. Seperti cerita aslinya, jumlah
totalnya adalah 40 bab. Ketika saya menulis artikel ini, saya sedang menerjemahkan **Bab 12**, dan menyadari
beberapa kendala serius di kemudian hari yang berhubungan dengan _format_.

Beberapa alternatif berikut juga bisa dipakai. Dalam hal ini Anda perlu mengunduh paket ini melalui GitHub. 
Gunakan tombol 'Code' (berwarna hijau), lalu pilih tombol 'Download ZIP'.

1. Saya juga menyertakan sebuah file bernama 'reader.html' yang bisa dipakai untuk menampilkan 
semua file **Markdown** dengan benar melalui _browser_ Anda. Meskipun tidak wajib, saya menganjurkan Anda menggunakan
**Google Chrome**. Yang ditampilkan oleh halaman tersebut adalah sebuah halaman kosong yang hanya berisi sebuah
**Menu Bar** dengan tombol 'Open'. Gunakan menu tersebut untuk menemukan file berekstensi '.md' Anda.
2. Untuk secara otomatis menampilkan keseluruhan cerita, Anda tetap _perlu_ menjalankan sebuah HTTP Server,
meskipun proses mengakses file-file tersebut hanya melalui tombol-tombol dari klien. Ada banyak cara untuk melakukan
hal ini. Kita bisa memanfaatkan _internal HTTP Server_ milik PHP, atau membuat sebuah skrip sederhana yang akan
dijalankan oleh **Node.js**. Tetapi hal ini selain memaksa Anda mengunduh software PHP atau Node.js itu sendiri,
juga membutuhkan keterampilan menulis skrip untuk bahasa terkait, khususnya Node.js. Selain itu Anda tetap perlu
membuka sebuah _terminal_ dari dalam _desktop_ Anda. Saya menyertakan sebuah skrip bernama 'server.js' yang bisa
dipakai untuk itu, tetapi saat ini skrip tersebut masih terlalu sederhana dan tidak praktis dipakai.
3. Unduh sebuah _native software_ bernama [Node Webkit](https://nwjs.io/downloads/). Dari kedua pilihan yang
tersedia menurut masing-masing OS yang sesuai, pilih yang 'Normal', dan bukan 'SDK' (kecuali kalau Anda merasa perlu
menggunakan fitur-fitur yang terkait dengan pengembangan software). Tempatkan seluruh isi _repository_ cerita novel
ini yang sudah diunduh sebelumnya, ke dalam folder berisi hasil ekstraksi [Node Webkit](https://nwjs.io/downloads/)
tersebut. Node Webite tidak perlu diinstall, kita bisa menempatkannya di mana saja semau kita. Pendeknya, file yang
bernama 'index.html' dan 'package.json' harus berada di dalam direktori yang sama dengan 'nw.exe' (untuk Windows).
_Double click_ icon aplikasi tersebut untuk menjalankannya, dan dari window utama aplikasi itu akan terlihat sebuah
menu bernama 'Chapters'. Pilih 'Load...', lalu masukkan input berupa nomor **Bab** yang diinginkan (antara 1 — 40).
Sampai saya menulis artikel ini, terjemahan baru sampai di Bab 12, tetapi semua nomor lain akan tetap menampilkan
isi _markdown_ dengan hanya berisi _tautan_ video yang terkait adegan seperti yang diilustrasikan oleh gambar
ilustrasi cerita aslinya.

Pilihan terakhir, kalau semua yang di atas tidak bisa dijalankan, adalah membaca secara langsung file berekstensi
<code>.md</code> tersebut dari dalam editor teks biasa, dalam hal ini setidaknya gunakan 'VS Code' atau 'ViM',
karena saya menyimpannya dengan menggunakan EOL (End of Line) untuk UNIX, dan bukan Windows, jadi kalau Anda
menggunakan Windows, dan menampilkannya di Notepad, kelihatannya akan kacau dan sulit dibaca tanpa diedit secara manual.

Pekerjaan ini masih terlalu jauh dari 'selesai', tetapi cerita itu sendiri sudah bisa dibaca (dengan beberapa _error_
berupa salah ketik, atau lainnya, kalau memang ada). Cerita asli karya Jin Yong mulanya dirilis sebagai sebuah
cerita bersambung dalam surat kabar Hong Kong Commercial Daily, mulai dari 1 Januari 1957 — 19 Mei 1959. Cerita hasil
saduran saya ini pun demikian, hanya saja, saat ini ditampilkan oleh **GitHub**.

[^yingxiong]: 
    Ying Xiong (英雄), dalam konteks cerita silat umumnya bermakna 'Pendekar', meskipun 
    arti literalnya adalah 'Pahlawan'.

