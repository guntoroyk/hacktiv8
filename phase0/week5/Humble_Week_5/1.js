/*
===========
eMoneySplit
===========
[INSTRUCTIONS]
eMoneySplit adalah sebuah fungsi yang menerima parameter berupa string
dan akan mengembalikkan nilai string yang merupakan jumlah terbanyak dan terdikit.

[EXAMPLE]
INPUT: "bagus:200000,ali:20000,bagas:300000,andre:50000"
OUTPUT: terbanyak adalah bagas dan terdikit adalah andre

[NOTES]
1. Apabila tidak ada data tampilkan "tidak ada catatan eMoney"

[RULES]
1. WAJIB menggunakan algoritma/pseudocode atau -50 poin
*/

function eMoneySplit(stringData) {
  // code below here
  let arrStringData = stringData.split(",");
  // console.log(arrStringData);
  // [ 'bagus:200000', 'ali:20000', 'bagas:300000', 'andre:50000' ]
  
  let arrOfObject = [];
  if (stringData.length === 0) {
    return "tidak ada catatan eMoney";
  } else {
    for (let i = 0; i < arrStringData.length; i++) {
      let nameAndMoney = arrStringData[i].split(":");
      // console.log(nameAndMoney);
      
      let object = {
        name: nameAndMoney[0],
        money: Number(nameAndMoney[1])
      }
      arrOfObject.push(object);
    }
    
    // console.log(arrOfObject);
    // [ { name: 'bagus', money: 200000 },
    //   { name: 'ali', money: 20000 },
    //   { name: 'bagas', money: 300000 },
    //   { name: 'andre', money: 50000 } ]

    let terbanyak = 0
    let objTerbanyak = 0;

    let terdikit = 0;
    let objTerdikit = 0;
    for (let i = 0; i < arrOfObject.length; i++) {
      if (i === 0) {
        terbanyak = arrOfObject[i].money;
        objTerbanyak = arrOfObject[i];
        
        terdikit = arrOfObject[i].money;
        objTerdikit = arrOfObject[i];
      } else {
        if (arrOfObject[i].money > terbanyak) {
          terbanyak = arrOfObject[i].money;
          objTerbanyak = arrOfObject[i];
        } else if (arrOfObject[i].money < terdikit) {
          terdikit = arrOfObject[i].money;
          objTerdikit = arrOfObject[i];
        }
      }
    }
    // console.log(terbanyak);
    // console.log(objTerbanyak);
    // console.log(objTerdikit)

    return "terbanyak adalah " + objTerbanyak.name + " dan terdikit adalah " + objTerdikit.name;
    
    
  }
}

console.log(eMoneySplit('bagus:200000,ali:20000,bagas:300000,andre:50000'))
// terbanyak adalah bagas dan terdikit adalah ali
console.log(eMoneySplit('andre:50000'))
// terbanyak adalah andre dan terdikit adalah andre
console.log(eMoneySplit(''))
// tidak ada catatan eMoney



/**ALGORITMA */

/**
 * 1. Pisah stringData berdasarkan ',' ke dalam arrayStringData
 * 2. Jika panjang StringData sama dengan kosong maka ke langkah 6 jika tidak lanjut ke langkah 3
 * 3. Buat sebuah arrayOfObject yang berisi dari masing-masing row di arrStringData menggunakan for loop
 *    objek terdiri dari properti name dan money. Untuk mendapatkan name dan money, pisahkan masing-masing row       di arrStringData berdasarkan ":". Kemudian ubah money ke Number.
 * 4. Lakukan pencarian properti money yang terbanyak dan terdikit.
 * 5. Kembalikan sebuah string 'terbanyak adalah ' + value dari properti nama pada object dengan money terbanyak + ' dan terdikit adalah ' + value dari properti nama pada object dengan money terdikit.
 * 6. Kembalikan string 'tidak ada catatan eMoney'
 */