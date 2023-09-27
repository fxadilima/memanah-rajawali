---
layout: post
author: FX. Adi Lima
---

Seandainya kita punya koleksi buku-buku seperti yang sudah ditulis dengan susah payah dalam situs ini,
semuanya bisa kita letakkan di dalam sebuah folder, untuk ini saya memakai nama 'sdyxz', kependekan
dari judul aslinya, She Diao Ying Xiong Zhuan.

Kita bisa membuat sebuah entry di dalam file '_config.yml' sbb:

```yaml
collection:
  sdyxz:
    output: true
```

Tetapi nama folder sdyxz tersebut harus kita beri awalan underscore '_', menjadi '_sdyxz'.

Nantinya secara otomatis Jekyll akan membuat output folder yang bernama 'sdyxz', tanpa underscore.

## Membuat Menu

Tentunya kalau koleksi tersebut mencapai 40 buku, belum termasuk buku-buku pendukungnya, adalah
sangat tidak lucu kalau kita masukkan semuanya sekaligus menjadi sebuah _dropdown menu_ atau
menu sederhana lainnya. Lebih masuk akal kalau kita menulis sebuah file baru untuk menampilkan
semuanya sekaligus, berikut keterangan yang perlu.

{% highlight html %}
---
layout: page
title: Books
---

<ul>
{% raw %}
  {% for book in site.sdyxz %}
    <li><a href="{{ book.url }}">{{book.title}}</a></li>
  {% endfor %}
{% endraw %}
</ul>
{% endhighlight %}

### Masalah Dengan URL

Dalam contoh di atas kelihatannya semuanya sederhana, tetapi kalau kita sedang menulis dokumentasi
untuk proyek yang akan dimuat di halaman GitHub, dan proyek itu adalah sebuah _repository_, maka
variabel ```book.url``` di atas akan menjadi lain, dan halaman tidak akan ditemukan.

Contohnya, repository untuk proyek ini sendiri adalah `https://github.com/memanah-rajawali`,
dan saya deploy menggunakan sub-direktori `docs`, nantinya **Base URL** dari proyek ini akan
menjadi `https://fxadilima.github.io/memanah-rajawali`, tetapi isi variabel `book.url` di atas
ternyata masih tetap `/sdyxz/bab1.html`, yang _pasti_ salah.

Solusinya adalah menambahkan `url: https://fxadilima.github.io/memanah-rajawali` di dalam
file `_config.yml`, lalu kita ubah sedikit `href` untuk link di atas menjadi sbb:

```html
{% raw %}
<li><a href="{{ site.url }}{{book.url}}">{{book.title}}</a></li>
{% endraw %}
```

