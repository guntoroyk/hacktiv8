/*
///////////////////
richestGroupDynamic
///////////////////

Function richestGroupDynamic akan menentukkan siapa yang paling kaya dalam suatu grup.
Function akan menerima 1 parameter yaitu:
- groups adalah array yang berisi kumpulan data vote, tipe datanya array.
Function ini akan mengembalikkan nilai string.

----------
EXAMPLE 1:
----------
[INPUT]
var groups = [
  ['A', 'B', 'C'],
  ['A', 'A', 'D', 'D', 'D']
]

[PROCESS]
Pada array ['A', 'B', 'C'] tidak ada yang unggul.
Pada array ['A', 'A', 'D', 'D', 'D'] D unggul.

[OUTPUT]
[ 'D' ]

----------
EXAMPLE 2:
----------
[INPUT]
var groups = [
  ['Z', 'Z'],
  ['B']
]

[PROCESS]
Pada array ['Z', 'Z'] Z unggul.
Pada array ['B'] B unggul.

[OUTPUT]
[ 'Z', 'B' ]

[RULES]
1. Dilarang menggunakan built in function apapun kecuali .push(), .unshift().
*/


function richestGroupDynamic(groups) {
  // code here
  let result = [];
  
  for (let i = 0; i < groups.length; i++) {
    // count = [[1, 'A']] index 0 untuk count index 1 untuk nama data
    let count = [ [1, groups[i][0]] ]; // 
    let index = 0;

    // loop through elements of groups mulai dari index 1
    for (let j = 1; j < groups[i].length; j++) {
      // jika nama data count sama dengan indeks ke j , maka masukkan ke array elemen ke-index di array count
      if (count[index][1] === groups[i][j]) { 
        count[index][0] += 1; 
        
        //jika tidak, buat array baru dalam array count. Tambahkan indeks dg 1
      } else {
        count.push( [1, groups[i][j]  ] );
        index++;
      }
    }
    
    // most = [1, 'A']
    let most = [count[0][0], count[0][1]];
    let same = true;
    
    // jika count length cuma satu maka buat tidak sama
    if (count.length === 1) {
      same = false;

    // jika lebih dari satu, maka lakukan pengecekan lagi
    } else {
      // lakukan loop untuk mengecek satu-satu elemen dari count untuk mendapatkan most. 
      for (let i = 1; i < count.length; i++) {
        same = true;

        //Jika most berubah, maka artinya elemen" itu tidak sama
        if (count[i][0] > most[0]) {
          most = [count[i][0], count[i][1]];
          same = false;
        }
      }
    }
    
    // jika tidak sama (same bernilai false), masukkan nama data (nilai most indeks i) ke result
    if (!same) {
      result.push(most[1])
    }
    
    // console.log(count);
    // console.log(same)
    // console.log(most)
  }
  return result;
}

console.log(richestGroupDynamic([
  ['A', 'B', 'C'],
  ['A', 'A', 'D', 'D', 'D']
]))
// [ 'D' ]

console.log(richestGroupDynamic([
  ['A', 'A'],
  ['B']
]))
// // [ 'A', 'B' ]

console.log(richestGroupDynamic([
  ['Z', 'Z'],
  ['B', 'X']
]))
// // [ 'Z' ]

console.log(richestGroupDynamic([]))
// // []