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
*/
function minDistanceBetweenGreatest(arr) {
  var sortDulu = arr;
  for (let i = 0; i < sortDulu.length; i++) {
    for (let j = i + 1; j < sortDulu.length; j++) {
      if (sortDulu[i] < sortDulu[j]) {
        var temp = sortDulu[i];
        sortDulu[i] = sortDulu[j];
        sortDulu[j] = temp;
      }
    }
  }
  var greatest = sortDulu[0];
  var indexGr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === greatest) {
      indexGr.push(i);
    }
  }
  if (indexGr.length===1){
      return 0
  }else {
  var distances = [];
  for (let i = 0; i < indexGr.length; i++) {
      for (let j=i+1; j<indexGr.length; j++){
      var dis = indexGr[j]-indexGr[i];
      }
    distances.push(dis)
  }
if (indexGr.length===arr.length){
    return 1
} else {
    return distances[0]
}
  }
}
console.log(minDistanceBetweenGreatest([3, 5, 2, 3, 5, 3, 5])); //2
console.log(minDistanceBetweenGreatest([1, 1, 1, 1, 1, 1])); //1
console.log(minDistanceBetweenGreatest([7, 8, 5, 2, 1, 1])); //0
console.log(minDistanceBetweenGreatest([3, 5, 2, 3, 5, 3, 5])); //2
