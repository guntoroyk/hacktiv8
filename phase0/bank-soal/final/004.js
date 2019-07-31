/**
======================
 SISA BELANJA LEBARAN
======================

[INSTRUCTION]
Menjelang lebaran emak-emak ramai belanja ke pasar, 
seorang emak ingin berbelanja ke pasar dengan uang yang seadanya hasil dari THR suaminya,
dan emak bingung untuk memilih mana yang harus jadi prioritas agar sesuai kebutuhan lebaran.

Buatlah function yang akan menghitung nominal dan jumlah pecahan pengembalian belanja.
function tersebut akan menerima 2 parameter parameter pertama adalah nilai pembayaran, 
parameter kedua adalah nilai yang harus dibayarkan. 

Buatlah code se-dinamis mungkin untuk menghandle apabila ketersediaan uang nominal dan jumlahnya
diubah-ubah dan asumsi uang kembaliannya selalu cukup dengan jumlah ketersediaan uang
 

*/

function sisaBelanjaLebaran(bayar, harga){
  
}

// Belanja Bahan Pokok 
console.log(sisaBelanjaLebaran(1000000, 755000));
/*
output
  { 
    '5000': 1, 
    '20000': 2, 
    '100000': 2 
  }
*/

// Belanja Kue Lebaran
console.log(sisaBelanjaLebaran(40000, 35000));
/*
output
  { '5000': 1 }
*/

// Belanja Baju Baru
console.log(sisaBelanjaLebaran(50000,50000)); // {}

// Belanja Opor Ayam
console.log(sisaBelanjaLebaran(50000,500000)); // Uang tidak cukup mak, minta lagi sama suami
