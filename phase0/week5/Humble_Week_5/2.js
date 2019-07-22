/*
========
warOfFun
========
[INSTRUCTIONS]
warOfFun adalah sebuat fungsi yang menerima parameter berupa string dan
akan mengembalikkan nilai string yang merupakan pemenang perlombaan.

[EXAMPLE]
INPUT: [
  ['andre', 'toni', 'toti'],
  ['risk', 'fun', 'go'],
  ['humble', 'psyhco', 'strong']
]

PROCESS: 
1. array[0] akan berisi nama-nama pemain
2. array-aray pada indeks berikutnya akan berisi attribut-attribut yang dimiliki oleh setiap pemain sesuai dengan indeksnya
3. pada array[1] andre tidak memiliki fun, toni memiliki 1 fun, dan toti tidak memiliki fun
4. pada array[2] andre tidak memiliki fun, toni tidak memiliki fun, dan toti tidak memiliki fun.
5. total andre tidak memiliki fun, toni memiliki 1 fun, dan toti tidak memiliki fun, sehingga pemenangnya adalah toni.

OUTPUT: pemenangnya adalah toni

[NOTES]
1. Apabila tidak ada pemenang tampilkan "mohon maaf tidak ada pemenangnya"
2. Asumsi tidak akan ada yang seri tapi tidak selalu ada pemenangnya

[RULES]
1. Dilarang menggunakan built in function .sort()
*/

function warOfFun(informations) {
  // code here
  // cari nama-namanya
  if (informations.length === 0) {
    return "mohon maaf tidak ada pemenangnya";
  } else {
    let nama = []
    for (let i = 0; i < informations[0].length; i++) {
      nama.push([informations[0][i], 0]);
    }
    // console.log(nama)
    
    
    for (let i = 1; i < informations.length; i++) {
      for (let j = 0; j < informations[i].length; j++) {
        if (informations[i][j] === 'fun') {
          nama[j][1] += 1;
        }
      }
    }
    // console.log(nama)
    
    terbanyak = nama[0];
    for (let i = 1; i < nama.length; i++) {
      
      if (nama[i][1] > terbanyak[1]) {
        terbanyak = nama[i];
      }
      
    } 
    // console.log(terbanyak)
    if (terbanyak[1] > 0) {
      return "pemenangnya adalah " + terbanyak[0];
    } else {
      return "mohon maaf tidak ada pemenangnya"
    }
  }
}

console.log(warOfFun([
  ['andre', 'toni', 'toti'],
  ['risk', 'fun', 'go'],
  ['humble', 'psyhco', 'strong']
]))
// pemenangnya adalah toni

console.log(warOfFun([
  ['andre', 'toni', 'toti', 'tito'],
  ['fun', 'fun', 'fun'],
  ['fun', 'fun'],
  ['nonfun', 'fun', 'fun', 'fun']
]))
// pemenangnya adalah toni

console.log(warOfFun([
  ['andre', 'toni'],
  ['risk', 'go'],
  ['humble', 'strong']
]))
// mohon maaf tidak ada pemenangnya

console.log(warOfFun([]))
// mohon maaf tidak ada pemenangnya