/*

Ugly numbers adalah angka yang jika dibagi dengan faktor prima angka 2, 3 atau 5 menghasilkan angka 1.

Contoh 1:
4 merupakan ugly number karena
Proses:
1. 4 dibagi 2 menghasilkan sisa bagi = 0 dan hasilnya adalah 2
2 dibagi 2 menghasilkan sisa bagi = 0 dan hasilnya adalah 1

Maka 4 merupakan ugly number

contoh 2:
15 merupakan ugly number karena
Proses:
1. 15 dibagi 2 menghasilkan sisa bagi > 0, maka akan melanjutkan ke step 2
2. 15 dibagi 3 menghasilkan sisa bagi = 0 dan hasilnya adalah 5
5 dibagi 3 menghasilkan sisa bagi > 0 maka akan melanjutkan ke step 3
3. 5 dibagi 5 menghasilkan sisa bagi = 0 dan hasilnya adalah 1

Maka 15 merupakan ugly number

contoh 3:
17 bukan ugly number karena
Proses:
1. 17 dibagi 2 menghasilkan sisa bagi > 0 maka akan melanjutkan ke step 2
2. 17 dibagi 3 menghasilkan sisa bagi > 0 maka akan melanjutkan ke step 3
3. 17 dibagi 5 menghasilkan sisa bagi > 0 dan hasilnya bukan 1

Maka 17 bukan ugly number

contoh 4:
20 merupakan ugly number karena
Proses:
1. 20 dibagi 2 menghasilkan sisa bagi = 0 dan hasilnya adalah 10
10 dibagi 2 menghasilkan sisa bagi = 0 dan hasilnya adalah 5
5 dibagi 2 menghasilkan sisa bagi > 0 maka lanjut ke step 2
2. 5 dibagi 3 menghasilkan sisa bagi > 0 maka akan melanjutkan ke step 3
3. 5 dibagi 5 menghasilkan sisa bagi = 0 dan hasilnya adalah 1

Maka 20 merupakan ugly number

Buatlah sebuah function getUglyNumber dimana menerima sebuah parameter bertipe Number.
Function tersebut mengembalikan/me-return array kumpulan deret bilangan ugly number sampai angka parameter tersebut.

Contoh 1:
input: 10
output: [ 2, 3, 4, 5, 6, 8, 9, 10 ]

Contoh 2:
input: 20
output: [ 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20 ]

RULE:
- WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE

20
20 / 2 hasil: 10 sisa: 0
10 / 2 hasil: 5 sisa: 0
5 / 2 hasil: 2 sisa: 1

5 / 3 hasil 1 sisa 2

5 / 5 hasil 1 sisa 0



*/

function isUglyNumber(num) {
  let prime = [2, 3, 5];
  
  for (let i = 0; i < prime.length; i++) {
    let bool = true;
    while(bool) {
      if (num % prime[i] === 0) {
        // console.log({num})
        if (num / prime[i] === 1) {
          return true;
        }
        num = num / prime[i];
      } else if (num % prime[i] !== 0) {
        bool = false;
      } else if (num / prime[i] === 1) return true;
    }
  }
  return false;
}

// console.log(isUglyNumber(7));

function getUglyNumber(num) {
  let result = [];
  for (let i = 2; i <= num; i++) {
    if (isUglyNumber(i)) result.push(i);
  }
  return result
}

console.log(getUglyNumber(10)); //[ 2, 3, 4, 5, 6, 8, 9, 10 ]
console.log(getUglyNumber(20)); //[ 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20 ]
console.log(getUglyNumber(4)); //[ 2, 3, 4]
console.log(getUglyNumber(1)); //[]
