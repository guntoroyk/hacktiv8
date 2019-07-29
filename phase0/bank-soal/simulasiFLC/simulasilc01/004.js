
/*
===========================
Initial Grouping Descending
==========================

[INSTRUCTION]
Disediakan sebuah function initialGroupingDescending yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialGroupingDescending akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan huruf depan harus terurut dari paling besar/descending dan dipisahkan ke dalam
array dua dimensi.

[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Output: 
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]

Kamu tidak perlu peduli dengan urutan alphabet nama siapa yang keluar terlebih dahulu!

RULES:
- Dilarang menggunakan sintaks Set atau Regex
- Dilarang menggunakan built in function sort 

*/

function initialGroupingDescending(studentsArr) {
  let result = [];
  // Only Code Here
  let sorted = false
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < studentsArr.length; i++) {
      if (studentsArr[i] < studentsArr[i+1]){
        let temp = studentsArr[i];
        studentsArr[i] = studentsArr[i+1];
        studentsArr[i+1] = temp;
        sorted = false;
      }
    }
  }
  
  // console.log(studentsArr)
  let index = 0;
  for (let i = 0; i < studentsArr.length; i++) {
    if (i === 0) {
      result.push([studentsArr[i][0], studentsArr[0]]);
    } else {
      if (studentsArr[i][0] === result[index][0][0]) {
        // console.log(index)
        result[index].push(studentsArr[i]);
      } else {
        result.push([studentsArr[i][0], studentsArr[i]]);
        index++;
      }
    }
  }

  
  return result;
}

console.log(initialGroupingDescending(['Joko', 'Budi', 'Badu', 'Joni', 'Jono']));
/*
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]
*/

console.log(initialGroupingDescending(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
[
  [ 'Y', 'Yusuf' ],
  [ 'M', 'Mickey' ],
  [ 'G', 'Gong' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ]
]
*/

console.log(initialGroupingDescending(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
[
  [ 'S', 'Stone', 'Sticker' ],
  [ 'R', 'Rock', 'Rocker' ],
  [ 'B', 'Brick' ]
]
*/
