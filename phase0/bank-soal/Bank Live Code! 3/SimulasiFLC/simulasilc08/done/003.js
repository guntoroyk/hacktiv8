/*
Count solo
===========
Diberikan sebuah function countSolo, dimana function ini akan menerima parameter sebagai array
dan akan mereturn total jumlah dari angka angka yang TIDAK memiliki pasangan.
Example:
input: [ 5, 5, 6, 6, 3, 1, 2, 7, 7 ]
proses: 3 + 1 + 2
result: 6
RULES:
 - TIDAK BOLEH MENGGUNAKAN built in function .map, .filter, .reduce!
 - TIDAK BOLEH MENGGUNAKAN built in function .indexOf dan .include!
*/

function countSolo(numbers) {
  var group = [];
  for (let k = 0; k < numbers.length; k++) {
    var check = false;
    var save = [];
    for (let i = 0; i < group.length; i++) {
      if (numbers[k] === group[i][0]) {
        group[i].push(numbers[k]);
        check = true;
      }
    }
    if (check === false) {
      save.push(numbers[k]);
      group.push(save);
    }
  }
  var solo = [];
  for (let i = 0; i < group.length; i++) {
    if (group[i].length === 1) {
      solo.push(group[i][0]);
    }
  }
  var sum = 0;
  for (let i = 0; i < solo.length; i++) {
    sum += solo[i];
  }
  return sum;
}

console.log(countSolo([5, 5, 6, 6, 3, 1, 2, 7, 7])); // 6
console.log(countSolo([3, 6, 3, 6, 1, 1, 2, 1])); // 2
console.log(countSolo([3, 3, 3, 3, 4, 5, 8, 10, 11])); // 38
