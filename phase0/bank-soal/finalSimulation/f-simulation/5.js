/*
=================================
Object group class and sort score
=================================

[INSTRUCTION]
Diberikan arr object nilai-nilai murid dengan struktur object nama, score dan class,
tugas anda adalah memanipulasi data tersebut dengan meng-group berdasarkan
kelas dan sort ascending untuk score-nya!

[EXAMPLE]
- Bila arr of ojects adalah :
console.log(
 [
    {
      name: 'debby',
      score: 100,
      class: 'A'
    },
    {
      name: 'amy',
      score: 80,
      class: 'A'
    },
    {
      name: 'david',
      score: 32,
      class: 'A'
    },
    {
      name: 'heraldo',
      score: 90,
      class: 'B'
    },
    {
      name: 'arnold',
      score: 100,
      class: 'B'
    },
    {
      name: 'aakansha',
      score: 75,
      class: 'B'
    },
    {
      name: 'aleksa',
      score: 90,
      class: 'C'
    }
  ]
maka hasilnya adalah:
{ A:
   [ { name: 'david', score: 32 },
     { name: 'amy', score: 80 },
     { name: 'debby', score: 100 } ],
  B:
   [ { name: 'aakansha', score: 75 },
     { name: 'heraldo', score: 90 },
     { name: 'arnold', score: 100 } ],
  C: [ { name: 'aleksa', score: 90 } ] }

[RULE]
1. dilarang menggunakan indexOf(), find(), filter(), shift(), unshift(), sort()
2. dilarang menggunakan regex
*/

function groupSort(arr) {
  for(var j = arr.length-1 ; j >= 0 ; j--){
    for(var k = 0 ; k < j ; k++){
      if(arr[k].score > arr[k+1].score){
        var nilai = arr[k];
        arr[k] = arr[k+1];
        arr[k+1] = nilai;
      }
    }
  }
  
  var result = {};
  for(var i = 0 ; i < arr.length ; i++){
    // console.log(arr[i])
    if(result[arr[i].class] === undefined){
      result[arr[i].class] = [];
    }
    var temp = {
      name: arr[i].name,
      score: arr[i].score
    }
    result[arr[i].class].push(temp);
  }
  return result;
}

console.log(
  groupSort([
    {
      name: 'debby',
      score: 100,
      class: 'A'
    },
    {
      name: 'amy',
      score: 80,
      class: 'A'
    },
    {
      name: 'david',
      score: 32,
      class: 'A'
    },
    {
      name: 'heraldo',
      score: 90,
      class: 'B'
    },
    {
      name: 'arnold',
      score: 100,
      class: 'B'
    },
    {
      name: 'aakansha',
      score: 75,
      class: 'B'
    },
    {
      name: 'aleksa',
      score: 90,
      class: 'C'
    }
  ])
);
/*
//  { A:
//     [ { name: 'david', score: 32 },
//       { name: 'amy', score: 80 },
//       { name: 'debby', score: 100 } ],
//    B:
//     [ { name: 'aakansha', score: 75 },
//       { name: 'heraldo', score: 90 },
//       { name: 'arnold', score: 100 } ],
//    C: [ { name: 'aleksa', score: 90 } ] }
//    */
