/*
Minimum Distance Between Greatest Element


Diberikan sebuah function minDistanceBetweenGreatest yang menerima sebuah parameter array of number. Dimana array tersebut akan memiliki nilai terbesar yang kemunculannya bisa lebih dari satu kali. Tentukan minimum jarak antara nilai terbesar satu ke nilai terbesar lainnya.

Contoh 1:
Input : [ 3, 5, 2, 3, 5, 3, 5 ]
Output : 2

Karena nilai terbesar dari array tersebut adalah 5 dan indeksnya adalah 1, 4 dan 6
- indeks 1 ke indeks 4, jaraknya adalah 3
- indeks 4 ke indeks 6, jaraknya adalah 2 

Jadi minimum jarak adalah 2

Contoh 2:
Input : [ 1, 1, 1, 1, 1, 1 ]
Output : 1


Karena nilai terbesar dari array tersebut adalah 1 dan indeksnya adalah 0, 1, 2, 3, 4 dan 5
- indeks 0 ke indeks 1, jaraknya adalah 1
- indeks 1 ke indeks 2, jaraknya adalah 1
- indeks 2 ke indeks 3, jaraknya adalah 1
- indeks 3 ke indeks 4, jaraknya adalah 1
- indeks 4 ke indeks 5, jaraknya adalah 1

Jadi minimum jarak adalah 1

RULE:
 - Dilarang menggunakan .map, .filter dan .reduce

*/

function minDistanceBetweenGreatest(arr) {
  // your code here
  let greatest = arr[0];
  let indexsOfGreatest = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > greatest) greatest = arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === greatest) indexsOfGreatest.push(i);
  }

  // console.log(indexsOfGreatest)
  if (indexsOfGreatest.length < 2) return 0;

  let minDistance = 0;
  for (let i = 0; i < indexsOfGreatest.length; i++) {
    if (i === 0) minDistance = (indexsOfGreatest[i+1] - indexsOfGreatest[i]);
    else {
      if (indexsOfGreatest[i+1] - indexsOfGreatest[i] < minDistance) {
        minDistance = indexsOfGreatest[i+1] - indexsOfGreatest[i];
      }
    }
  }
  return minDistance;
}

console.log(minDistanceBetweenGreatest([ 3, 5, 2, 3, 5, 3, 5 ])); //2
console.log(minDistanceBetweenGreatest([ 1, 1, 1, 1, 1, 1 ])); //1
console.log(minDistanceBetweenGreatest([ 7, 8, 5, 2, 1, 1 ])); //0
