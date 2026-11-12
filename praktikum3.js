// ===== Bagian A: getElementsByClassName =====
const buah = document.getElementsByClassName("buah");

console.log(buah);          // lihat koleksinya
console.log(buah.length);   // jumlah elemen
console.log(buah[0]);       // elemen pertama

// mengubah elemen tertentu
buah[0].style.color = "red";

// mengubah semua elemen dengan perulangan
for (let i = 0; i < buah.length; i++) {
    buah[i].style.fontWeight = "blue";
    buah[i].textContent = (i + 1) + ". " + buah[i].textContent;
}

// ===== Bagian B: getElementsByTagName =====
const semuaLi = document.getElementsByTagName("li");

console.log(semuaLi.length);

for (let i = 0; i < semuaLi.length; i++) {
    semuaLi[i].style.backgroundColor = "lightyellow";
}

// ===== Tantangan Mandiri 3.1: Mengubah warna teks elemen li terakhir menjadi biru =====
semuaLi[semuaLi.length - 1].style.color = "blue";

// ===== Tantangan Mandiri 3.2: Mengubah warna semua tag h2 menjadi teal dengan perulangan =====
const semuaH2 = document.getElementsByTagName("h2");

for (let i = 0; i < semuaH2.length; i++) {
    semuaH2[i].style.color = "teal";
}