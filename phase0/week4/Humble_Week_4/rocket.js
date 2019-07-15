/*
  ///////////////////
  richestGroupDynamic
  ///////////////////

  Function richestGroupDynamic akan menentukkan siapa yang paling kaya dalam suatu grup.
  Function akan menerima 1 parameter yaitu:
    - groups adalah array yang berisi kumpulan data vote, tipe datanya array.
  Function ini akan mengembalikkan nilai string.
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var groups = [
      ['A', 'B', 'C'],
      ['A', 'A', 'D', 'D', 'D']
    ]

  [PROCESS]
  Pada array ['A', 'B', 'C'] tidak ada yang unggul.
  Pada array ['A', 'A', 'D', 'D', 'D'] D unggul.

  [OUTPUT]
    [ 'D' ]

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var groups = [
      ['Z', 'Z'],
      ['B']
    ]

  [PROCESS]
  Pada array ['Z', 'Z'] Z unggul.
  Pada array ['B'] B unggul.

  [OUTPUT]
    [ 'Z', 'B' ]

  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .unshift().
*/


function richestGroupDynamic(groups) {
  // code here
}

console.log(richestGroupDynamic([
  ['A', 'B', 'C'],
  ['A', 'A', 'D', 'D', 'D']
]))
// [ 'D' ]

console.log(richestGroupDynamic([
  ['A', 'A'],
  ['B']
]))
// [ 'A', 'B' ]

console.log(richestGroupDynamic([
  ['Z', 'Z'],
  ['B', 'X']
]))
// [ 'Z' ]

console.log(richestGroupDynamic([]))
// []