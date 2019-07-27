/*
****************
Advanced Seating
****************
trainSeating adalah sebuah function yang menerima parameter berupa array of object.
Yang harus mengeluarkan hasil sebuah object yang memiliki isi key berdasarkan jenis gerbong penumpang.
Yang berisi daftar nama penumpang dan tempat duduk penumpang.
Contoh input dan output bisa dilihat di test case.
*/

function trainSeating(penumpang) {
  var starta = [];
  for (let i = 0; i < penumpang.length; i++) {
    var check = false;
    var temp = [];
    for (let k = 0; k < starta.length; k++) {
      if (penumpang[i].gerbong === starta[k][0]) {
        check = true;
      }
    }
    if (check === false) {
      temp.push(penumpang[i].gerbong);
      starta.push(temp);
    }
  }
  var obj = {};
  for (let i = 0; i < starta.length; i++) {
    obj[starta[i]] = [];
  }
  for (let i = 0; i < penumpang.length; i++) {
    for (key in obj) {
      if (penumpang[i].gerbong === key) {
        var inObj = {
          nama: penumpang[i].nama,
          seat: penumpang[i].seat
        };
        obj[key].push(inObj);
      }
    }
  }
  return obj;
}

console.log(
  trainSeating([
    { nama: "Awtian", gerbong: "VVIP", seat: "A1" },
    { nama: "Klonoa", gerbong: "VIP", seat: "V1" },
    { nama: "Azizy", gerbong: "VVIP", seat: "A2" },
    { nama: "Crash", gerbong: "Regular", seat: "R1" },
    { nama: "Sena", gerbong: "Regular", seat: "R3" },
    { nama: "Retsu", gerbong: "VIP", seat: "V2" },
    { nama: "Hiruma", gerbong: "VVIP", seat: "A666" },
    { nama: "Tsubasa", gerbong: "VIP", seat: "V6" }
  ])
);
/*
Output :
{
  VVIP:
   [ { nama: 'Awtian', seat: 'A1' },
     { nama: 'Azizy', seat: 'A2' },
     { nama: 'Hiruma', seat: 'A666' } ],
  VIP:
   [ { nama: 'Klonoa', seat: 'V1' },
     { nama: 'Retsu', seat: 'V2' },
     { nama: 'Tsubasa', seat: 'V6' } ],
  Regular:
    [ { nama: 'Crash', seat: 'R1' },
      { nama: 'Sena', seat: 'R3' } ]
}
*/
