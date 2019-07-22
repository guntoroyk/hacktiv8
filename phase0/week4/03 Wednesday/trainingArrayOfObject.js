// 1. memfilter nilai object berdasarkan kondisi tertentu

var exercise1 = [
  { name: 'ginta', position: 'BF', ability: 'fat', score: 20 },
  { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
]

// Release 1 => coba ambil nama-nama yang nilainya diatas 30
/* 
[ 
  { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
]
*/

function getOverThirty(input) {
  let result = [];
  
  for (let i = 0; i < input.length; i++) {
    if (input[i].score > 30) {
      result.push(input[i]);
      
    }
  }
  return result;
}
// console.log(getOverThirty(exercise1));

// Release 2 => coba ambil nama-nama yang nilainya diantara 70 dan 90
/* 
[ 
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
]
*/  

function getBetween70And80(input) {
  let result = [];
  
  for (let i = 0; i < input.length; i++) {
    if (input[i].score > 70 && input[i].score < 90) {
      result.push(input[i]);
    }
  }
  
  return result;
}
// console.log(getBetween70And80(exercise1));

// 2. mensorting array of object berdasarkan value dari objectnya

// Release 1 => sorting isi ascending
/* 
[ 
  { name: 'ginta', position: 'BF', ability: 'fat', score: 20 },
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 },
  { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100}
]
*/
function sortAscending(arr) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i-1].score > arr[i].score) {
        let temp = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = temp;
        sorted = false
      }
    }
  }
  return arr;
}
// console.log(sortAscending(exercise1));

// Release 2 => sorting isi descending
/* 
[ 
  { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 },
  { name: 'ginta', position: 'BF', ability: 'fat', score: 20 }
]
*/
function sortDescending(arr) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i-1].score < arr[i].score) {
        let temp = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = temp;
        sorted = false
      }
    }
  }
  return arr;
}
console.log(sortDescending(exercise1));