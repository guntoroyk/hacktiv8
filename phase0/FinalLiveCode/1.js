/*
Dalam sebuah game, hero yang dapat dipilih memiliki jenis tertentu
Dalam game ini satu tim harus memilih 5 heroes yang akan dimainkan
Disini kamu diminta menampilkan apakah pick hero yang dilakukan tergolong good atau bad dengan kodisi sebagai berikut
good pick : jika dari hero yang di pick tidak memiliki lebih dari 2 tipe hero yang sama
bad pick : jika dari hero yang di pick ada 3 atau lebih tipe hero yang sama
pick list : ranger, mage, tank, warrior, atau assassin (cuma ada 5 tipe ini)
tampilkan apakah good pick atau bad pick dan jenis apa yang lebih dari 2, pesan seperti pada test case

[RULES]
1. Wajib menggunakan Algoritma/Pseudocode
2. Hanya boleh menggunakan built in function .split(), .unshift(), dan .push()
*/

function heroPick(composition) {
  // code here
  let pickList = {
    'ranger': 0, 
    'mage': 0,
    'tank': 0, 
    'warrior': 0, 
    'assassin': 0
  };
  
  let arrComp = composition.split(",");
  // console.log(arrComp);
  if (arrComp.length < 5) return "not sufficient players";
  
  for (let i = 0; i < arrComp.length; i++) {
    let exist = false;
    for (key in pickList) {
      if (arrComp[i] === key) {
        exist = true;
        pickList[key]++;
      }
    }
    if (!exist) return arrComp[i] + " is not on the pick list";
   
  }
  // console.log(pickList)

  for (key in pickList) {
    if (pickList[key] > 2) {
      return "bad pick too many " + key;
    }
    // console.log(pickList[key]);
  }
  return "good pick";
}

/**
 * ALGORITMA
 * 1. Buat sebuah object pickList yang menampung nama-nama hero beserta jumlah kemunculannya
 * 2. Buat sebuah array arrComp untuk menampung string inputan yang telah di split berdasarkan ','
 * 3. Jika panjang arrComp kurang dari 5 maka kembalikan 'not sufficient players'
 * 4. Lakukan perulangan di setiap elemen dari arrComp. Kemudian cek nilai elemen tersebut apakah sama dengan salah satu key di pickList. Jika ya, lanjut ke 6 jika tidak lanjut ke 5.
 * 5. Kembalikan <key/nama hero> is not on the pick list
 * 6. Lakukan perulangan di setiap key di pickList. 
 * 7. Jika value dari salah satu pickList lebih dari 2 maka kembalikan "bad pick too many " + <key/nama hero>". Jika tidak lanjut ke langkah 8.
 * 8. Kembalikan "good pick"
 */

// Test case
console.log(heroPick('ranger,ranger,mage,tank,warrior')) // good pick
console.log(heroPick('mage,mage,tank,mage,warrior')) // bad pick too many mage
console.log(heroPick('mage,mage,tank,mage')) // not sufficient players
console.log(heroPick('mage,mage,god,mage,mage')) // god is not on the pick list
