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
    <li><a href="{{ book.url }}">\{{book.title}}</a></li>
  {% endfor %}
{% endraw %}
</ul>
{% endhighlight %}

