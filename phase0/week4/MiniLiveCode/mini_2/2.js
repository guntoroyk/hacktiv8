/*
  CHANGE WORDS
  Change words adalah sebuah fungsi yang menerima input
  berupa multi dimensional array yang berisi kata dan
  akan mengembalikan nilai baru berupa array multidimensional yang sudah diubah kata-katanya.

  RULES:
  1. Asumsi index row dan col selalu dimulai dari 0
  2. Pertambahan index row dan col akan menentukan bagaimana kata tersebut akan diolah:
    a. Apabila hasil pertambahan adalah bilangan prima maka hilangkan semua huruf vokal (a, e, i, u, o)
    b. Apabila hasil pertambahan adalah angka genap maka balik atau reversed kata tersebut
    c. Apabila hasil pertambahan adalah angka ganil maka ubah semua menjadi huruf besar

  EXAMPLE:
  INPUT: [
    ["cat", "fish"],
    ["dog", "cow"]
  ]
  OUTPUT: [
      ["tac", "FISH"],
      ["DOG", "wc"]
    ]

  EXPLANATION
    1. pertambahan index pada kata "cat" 0 berarti dia hanya bilangan genap sehingga kata "cat" dibalik menjadi "tac"
    2. pertambahan index pada kata "fish" dan "dog" adalah bilangan ganjila sehingga kedua kata tersebut diubah ke huruf besar
    3. Pertambahan pada kata "cow" adalah bilangan genap dan prima sehingga kata tersebut dibalik dan dihilangkan huruf vokalnya

  RULES:
    1. dilarang menggunakan built in function .split, .reversed, .join, .filter, .map dan sejenisnya
*/

function changeWords(words) {
  // code below here
};

var words = [
  ["cat", "dog", "fish"],
  ["cat", "dog", "fish"], 
  ["cat", "dog", "fish"]
]
console.log(changeWords(words))
/*
[ 
  [ 'tac', 'DOG', 'hsf' ],
  [ 'CAT', 'gd', 'FSH' ],
  [ 'tc', 'DG', 'hsif' ] 
]

*/