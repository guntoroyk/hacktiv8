/**
================
Hitung Kembalian
================

buatlah function yang akan menghitung nominal dan jumlah pecahan pengembalian transaksi.
function tersebut akan menerima 2 parameter parameter pertama adalah nilai pembayaran, 
parameter kedua adalah nilai yang harus dibayarkan. 

Code dibuat se dinamis mungkin untuk menghandle apabila ketersediaan uang nominal dan jumlahnya
diubah-ubah dan asumsi uang kembaliannya selalu cukup dengan jumlah ketersediaan uang
 
*/

function hitungKembalian(bayar, harga){
  if (bayar < harga) return "uang tidak cukup";
  let kembali = bayar - harga;
  let obj = {};
  let pecahan = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];

  for (let i = 0; i < pecahan.length; i++) {
    let bagi = Math.floor(kembali / pecahan[i]);
    let sisa = kembali % pecahan[i];
    // console.log(bagi)
    // console.log(sisa)
    if (sisa >= 0 && bagi > 0) {
      kembali = sisa;
      obj[pecahan[i]] = bagi;
    } 
  }

  // for (key in obj) {
  //   if (obj[key] === 0) {
  //     delete obj[key];
  //   }
  // }
  return obj;
}

// Test Case
console.log(hitungKembalian(1000000, 755000));
/*
output
  { 
    '5000': 1, 
    '20000': 2, 
    '100000': 2 
  }
*/

// Test Case
console.log(hitungKembalian(40000, 35000));
/*
output
  { '5000': 1 }
*/

// Test Case 3
console.log(hitungKembalian(920000, 80000));
/*
output
  { 
    '10000': 1, 
    '20000': 4, 
    '50000': 5, 
    '100000': 5 
  }
*/

// TEST CASE 4
console.log(hitungKembalian(50000,50000)); // {}

// TEST CASE 5
console.log(hitungKembalian(50000,500000)); // Uang tidak cukup


