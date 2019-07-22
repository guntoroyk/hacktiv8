/*
/////////////////
americanGotTalent
/////////////////

Function americanGotTalent akan menentukkan juara serta jumlah votingnya dari suatu array.
Function akan menerima 1 parameter yaitu:
- votes adalah kumpulan string nama, tipe datanya array.
Function ini akan mengembalikkan nilai string dalam format:
- Apabila terdapat juara: "Selamat juaranya adalah [nama], dengan total votes yang diterima [totalVotes]".
- Apabila tidak terdapat juara: "Mohon maaf juara tidak bisa ditentukkan dalam minggu ini".

----------
EXAMPLE 1:
----------
[INPUT]
var votes = ['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho'];

[PROCESS]
terdapat 2 voting Lee Min Ho yang paling banyak.

[OUTPUT]
Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2.

----------
EXAMPLE 2:
----------
[INPUT]
var votes = ['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho'];

[PROCESS]
tidak terdapat yang terbanyak.

[OUTPUT]
Mohon maaf juara tidak bisa ditentukkan dalam minggu ini

[RULES]
1. Dilarang menggunakan built in function apapun kecuali .push(), .pop(), .shift() dan .unshift()
*/

// function americanGotTalent(votes) {
//   // code here
//   let result = "";
//   let winner = "";
//   let voteCountMax = 0;
//   let same = false;

//   for (let i = 0; i < votes.length; i++) {
//     let voteCount = ;

//     for (let j = 0; j < votes.length; j++) {
//       if (j !== i) {
//         if (votes[j] === votes[i]) {
//           voteCount++;
//         }
//       }
//     }

//     if (voteCount > voteCountMax) {
//       voteCountMax = voteCount;
//       winner = votes[i];
//     }

//   }
//   if (same === true) {
//     result = "Mohon maaf juara tidak bisa ditentukkan dalam minggu ini";
//   } else {
//     result = "Selamat juaranya adalah " + winner + ", dengan total votes yang diterima " + voteCountMax;
//   }

//   return result;
// }

function americanGotTalent(votes) {
  let arr = [];
  let index = 0;
  let result = "";
  
  votes = bubbleSort(votes);
  arr[0] = [votes[0]];
  
  // console.log(arr[0])
  for (let i = 1; i < votes.length; i++) {
    if (votes[i] === arr[index][0]) {
      arr[index].push(votes[i]);
    } else {
      arr.push([votes[i]]);
      index++;
    }
  }
  
  let winner = arr[0][0];
  let votesMax = arr[0].length;
  let same = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > votesMax) {
      votesMax = arr[i].length;
      winner = arr[i][0];
    }
    if (arr[i].length !== arr[i-1].length) {
      same = false;
    }
  }
  
  if (!same) {
    result = "Selamat juaranya adalah " + winner + ", dengan total votes yang diterima " + votesMax;
  } else {
    result = "Mohon maaf juara tidak bisa ditentukkan dalam minggu ini";
  }
  return result;
  
}
//[ 'Arby', 'Darren McFlurry', 'Lee Min Ho', 'Lee Min Ho' ]

function bubbleSort(input) {
  let sorted = false;
  while(!sorted) {
    sorted = true;
    for (let i = 0; i < input.length; i++) {
      if (input[i] > input[i+1]) {
        let temp = input[i];
        input[i] = input[i+1];
        input[i+1] = temp;
        sorted = false
      }
    }
  }
  return input;
}



// console.log(bubbleSort(['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho']))


console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho']));
// // Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2
console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho']));
// // Mohon maaf juara tidak bisa ditentukkan dalam minggu ini
console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby']));
// // Selamat juaranya adalah Arby, dengan total votes yang diterima 2
