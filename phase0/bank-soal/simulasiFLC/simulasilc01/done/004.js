
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
for (let i=0; i<studentsArr.length; i++){
  for (let j=i+1; j<studentsArr.length; j++){
    if (studentsArr[i]<studentsArr[j]){
      var temSort = studentsArr[i]
      studentsArr[i]=studentsArr[j]
      studentsArr[j]=temSort
    }
  }
}
var firstChart = []
for (let i=0; i<studentsArr.length; i++){
  var temp = []
  var boleean = false
  for (let j=0;j<firstChart.length; j++){
    if (studentsArr[i][0]===firstChart[j][0][0]){
      firstChart[j].push(studentsArr[i])
      boleean= true
    }
  } if (boleean===false){
    temp.push(studentsArr[i])
    firstChart.push(temp)
  }
}
var result = []
for (let i=0; i<firstChart.length; i++){
    result.push([firstChart[i][0][0]])
for (let j=0; j<firstChart[i].length; j++){
    result[i].push(firstChart[i][j])
}
}
return result
}

console.log(initialGroupingDescending(['Budi', 'Badu', 'Joni', 'Jono']));
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
