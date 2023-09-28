---
layout: post
author: FX. Adi Lima
tags: layout frontmatter memanah-rajawali sdyxz novel buku
description: > 
    Menyederhanakan layout dari buku Memanah Rajawali menggunakan Liquid dan Jekyll.
    Blog ini adalah bagian dari proyek penyusunan buku Memanah Rajawali.
image: https://res.cloudinary.com/drzjshskk/image/upload/e_sharpen:120/v1676716319/sdyxz/originals/loch-00_x3cshn.jpg
---

Saat ini kita menyederhanakan urusan _layout_ dengan memasukkan semua data yang ada
ke dalan _frontmatter_. Untuk mendapatkan sebuah jilid yang _bersih_, kita tinggal
menghapus _frontmatter_ yang ditempatkan di paling atas ini.

Berikut adalah contoh struktur data untuk Bab 1:

```yaml
layout: default
chapter: 1
title: 🦅 Insiden Di Tengah Badai Salju
author: FX. Adi Lima
image: https://res.cloudinary.com/drzjshskk/image/upload/e_contrast:85,q_auto:best/v1676662508/sdyxz/originals/ch01_qqa6or.jpg
description: >
  Akhirnya si pendeta tertawa, mendadak telapak kanannya menghantam pegangan tombak dengan kecepatan seperti angin. 
  Yang Tiexin merasa pangkal jempol dan telunjuknya mati rasa, dan dengan segera ia melepaskan tombak ke tanah 
  yang diselimuti salju.
nextPage: bab2
prevPage: intro
```


