# Memakai Jasa CDN

Sebaiknya semua asset berupa image kita tempatkan di CDN, supaya bisa diakses secara
lebih _universal_.

Contoh adalah ilustrasi gambar untuk Bab 1, dengan _contrast_ yang diatur dari Cloudinary,
kita bisa mengaksesnya — dan sekaligus memanfaatkan _table_ untuk mengatur _layout_ secara
lebih baik — dengan cara berikut.

| Gambar      |      Narasi        |
|    :---:    | :---               |
| ![Insiden Di Tengah Badai Salju](https://res.cloudinary.com/drzjshskk/image/upload/e_contrast:85,q_auto:best/v1676662508/sdyxz/originals/ch01_qqa6or.jpg) | _Akhirnya si pendeta tertawa, mendadak telapak kanannya menghantam pegangan tombak dengan kecepatan seperti angin. Yang Tiexin merasa pangkal jempol dan telunjuknya mati rasa, dan dengan segera ia melepaskan tombak ke tanah yang diselimuti salju._ |

Perhatikan bahwa _table_ tersebut bisa saja sengaja dibuat tidak memiliki _header_.

Cara ini tetap bisa kita pakai untuk menampilkan daftar yang berisi _link_ video, atau bahkan hanya sekedar gambar,
kecuali kalau kita sudah puas dengan _default_, yaitu semua gambar akan ditampilkan oleh GitHub dengan _align left_.
Cara ini bisa kita pakai juga untuk menampilkan _link_ video.

***

Tabel berikut berisi semua _link_ untuk gambar ilustrasi yang sudah berada di _Cloudinary_.

| Dokumen |   Link    |
|  :---:  |   :---    | 
| Cover   | https://res.cloudinary.com/drzjshskk/image/upload/e_sharpen:120/v1676716319/sdyxz/originals/loch-00_x3cshn.jpg |
| Bab 1   | https://res.cloudinary.com/drzjshskk/image/upload/e_contrast:85,q_auto:best/v1676662508/sdyxz/originals/ch01_qqa6or.jpg |
| Bab 2   | https://res.cloudinary.com/drzjshskk/image/upload/v1676666031/sdyxz/originals/ch02_hrww24.jpg |
| Bab 3   | https://res.cloudinary.com/drzjshskk/image/upload/e_hue:30/v1676668128/sdyxz/originals/loch-03_pk9ptl.jpg |
| Bab 4   | https://res.cloudinary.com/drzjshskk/image/upload/e_sharpen:965/v1676692605/sdyxz/originals/loch-04_xgfiqj.jpg |
| Bab 5   | https://res.cloudinary.com/drzjshskk/image/upload/e_sharpen:162/v1676692567/sdyxz/originals/loch-05_exhrii.jpg |
| Bab 6   | https://res.cloudinary.com/drzjshskk/image/upload/e_sharpen:200/v1676692655/sdyxz/originals/loch-06_hqtnmd.jpg |
| Bab 7   | https://res.cloudinary.com/drzjshskk/image/upload/v1676662508/sdyxz/originals/ch07_ijj1tf.jpg |
| Bab 8   | https://res.cloudinary.com/drzjshskk/image/upload/e_sharpen:200/v1676692724/sdyxz/originals/loch-08_yhusym.jpg |
| Bab 9   | https://res.cloudinary.com/drzjshskk/image/upload/e_sharpen:400/v1676692753/sdyxz/originals/loch-09_fpvxuk.jpg |
| Bab 10  | https://res.cloudinary.com/drzjshskk/image/upload/e_sharpen:200/v1676692788/sdyxz/originals/loch-10_nsxcbk.jpg |
| Bab 11  | https://res.cloudinary.com/drzjshskk/image/upload/e_sharpen:400/v1676692824/sdyxz/originals/loch-11_pmioc0.jpg |
| Bab 12  | https://res.cloudinary.com/drzjshskk/image/upload/v1676662508/sdyxz/originals/ch12_shdy3n.jpg |

Semua gambar ilustrasi tersebut _bukan_ hasil kerja saya, tetapi didapat dari [situs terjemahan bahasa Inggris penggemar](),
dan kelihatannya adalah hasil _scanning_ dari _hardcopy_ buku aslinya. Karena itu beberapa _image_ punya _hue_ yang barangkali
kurang sesuai. Tetapi untungnya semua gambar tersebut berupa _sketch drawing_, jadi agak mudah diatur menjadi lebih baik.

Umumnya properti _sharpen_ bisa kita gunakan sebagai HTML _shorthand_, yaitu setelah '/image/upload/', entah gunakan
**e_hue:[suatu nilai]** atau **e_sharpen[suatu nilai]**, seperti contoh di atas.

Untuk mengakses dari dalam JavaScript gunakan cara berikut.

```javascript

// Image untuk Bab 3
cloudinary.imageTag('sdyxz/originals/loch-03_pk9ptl.jpg', {effect: "hue:30"}).toHtml();

```



