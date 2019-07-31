/* 
MENCARI POSISI TEMPAT DUDUK DI RUANG SEMINAR

function findEmptySeat akan menerima array multidimensi yang menggambarkan sebuah ruangan seminar.

Symbol '*' menandakan bahwa kursi telah ditempati seseorang, dan spasi ' ' menandakan bahwa kursi tersebut kosong.

Pada posisi persis tengah ruangan terdapat juga jalur kosong vertikal yang merupakan sebuah jalan.

Carilah posisi kosong pada ruangan tersebut dan tandai dengan menempatkan symbol '#'.

Jika terdapat lebih dari 1 posisi kursi kosong, maka pilihlah posisi dengan baris paling belakang diantara kursi kosong tersebut.
Dan jika ada lebih dari 1 posisi kursi kosong di baris yang sama, maka akan dipilih posisi paling kanan

Kalau tidak ada kursi kosong yang tersedia maka tampilkan pesan "maaf tidak ada kursi kosong tersedia"


INPUT:
[
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', ' ', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', ' ', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*']
]

PROCESS:
- jalur kosong ada di kolom dengan indeks 3
- posisi kursi kosong ada di indeks (4,1) dan (5,5)
- posisi kursi kosong paling belakang ada di indeks (5,5)

OUTPUT: simbol # ditempatkan pada posisi indeks (5,5)

[ ['*', '*', '*', ' ', '*', '*', '*'],
['*', '*', '*', ' ', '*', '*', '*'],
['*', '*', '*', ' ', '*', '*', '*'],
['*', '*', '*', ' ', '*', '*', '*'],
['*', ' ', '*', ' ', '*', '*', '*'],
['*', '*', '*', ' ', '*', '#', '*'],
['*', '*', '*', ' ', '*', '*', '*'],
['*', '*', '*', ' ', '*', '*', '*'] ]

*/

function findEmptySeat(room) {
  // code here
  let indexKosong = [];
  for (let i = 0; i < room.length; i++) {
    for (let j = 0; j < room[i].length; j++) {
      if (j !== (room[i].length - 1) / 2) {
        if (room[i][j] === " ") {
          indexKosong.push([i, j])
        }
      }
    }
  }

  if (indexKosong.length === 0) return "maaf tidak ada kursi kosong tersedia"
  
  for (let i = 0; i < indexKosong.length; i++) {
    if (i === 0) {
      indexDipilih = indexKosong[i];
    } else {
      if (indexKosong[i][0] === indexDipilih[0]) {
        if (indexKosong[i][1] > indexDipilih[1]) {
          indexDipilih = indexKosong[i];
        }
      } else {
        if (indexKosong[i][0] > indexDipilih[0]) {
          indexDipilih = indexKosong[i];
        }
      }
    }
  }


  for (let i = 0; i < room.length; i++) {
    for (let j = 0; j < room[i].length; j++) {
      if (j !== (room[i].length - 1) / 2) {
        if (i === indexDipilih[0] && j === indexDipilih[1]) {
          room[i][j] = "#";
        }
      }
    }
  }
  
  // console.log(indexKosong);
  // console.log(indexDipilih)
  return room;
}


console.log(findEmptySeat([
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', ' ', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', ' ', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*']
]))
// /* 
// [ ['*', '*', '*', ' ', '*', '*', '*'],
// ['*', '*', '*', ' ', '*', '*', '*'],
// ['*', '*', '*', ' ', '*', '*', '*'],
// ['*', '*', '*', ' ', '*', '*', '*'],
// ['*', ' ', '*', ' ', '*', '*', '*'],
// ['*', '*', '*', ' ', '*', '#', '*'],
// ['*', '*', '*', ' ', '*', '*', '*'],
// ['*', '*', '*', ' ', '*', '*', '*'] ]
// */

// console.log()

// console.log(findEmptySeat([
//   ['*','*', '*', '*', ' ', '*', '*', '*', '*'],
//   ['*','*', '*', '*', ' ', '*', '*', '*', '*'],
//   ['*','*', '*', '*', ' ', '*', '*', '*', '*'],
//   ['*','*', ' ', '*', ' ', ' ', '*', '*', '*'],
//   ['*','*', '*', '*', ' ', '*', '*', '*', '*'],
//   ['*','*', '*', '*', ' ', '*', '*', '*', '*'],
//   ['*','*', '*', '*', ' ', ' ', '*', '*', '*'],
//   ['*','*', ' ', '*', ' ', '*', '*', '*', '*'],
//   ['*','*', '*', '*', ' ', '*', '*', '*', '*']
// ]))
// /*
// [ [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
// [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
// [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
// [ '*', '*', ' ', '*', ' ', ' ', '*', '*', '*' ],
// [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
// [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
// [ '*', '*', '*', '*', ' ', ' ', '*', '*', '*' ],
// [ '*', '*', '#', '*', ' ', '*', '*', '*', '*' ],
// [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ] ]
// */

console.log(findEmptySeat([
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*']
]))
// maaf tidak ada kursi kosong tersedia
