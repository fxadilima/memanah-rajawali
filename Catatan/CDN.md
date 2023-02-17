# Memakai Jasa CDN

Sebaiknya semua asset berupa image kita tempatkan di CDN, supaya bisa diakses secara
lebih _universal_.

Contoh adalah ilustrasi gambar untuk Bab 1, dengan _contrast_ yang diatur dari Cloudinary,
kita bisa mengaksesnya — dan sekaligus memanfaatkan _table_ untuk mengatur _layout_ secara
lebih baik — dengan cara berikut.

|             |                    |
|    :---:    | :---               |
| ![Insiden Di Tengah Badai Salju](https://res.cloudinary.com/drzjshskk/image/upload/e_contrast:85,q_auto:best/v1676662508/sdyxz/originals/ch01_qqa6or.jpg) | _Akhirnya si pendeta tertawa, mendadak telapak kanannya menghantam pegangan tombak dengan kecepatan seperti angin. Yang Tiexin merasa pangkal jempol dan telunjuknya mati rasa, dan dengan segera ia melepaskan tombak ke tanah yang diselimuti salju._ |

Perhatikan bahwa _table_ tersebut sengaja dibuat tidak memiliki _header_.

