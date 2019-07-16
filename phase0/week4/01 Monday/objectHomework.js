// 1. Buat object seperti ini
/*
  {
    name: YOUR_NAME,
    batch: YOUR_BATCH,
    hobbies: [YOUR_HOBBIES]
  }
*/

function createObject() {
  return {
    name: "Guntoro Yudhy Kusuma",
    batch: 34,
    hobbies: "reading, swimming"
  }
}

var a = createObject();
console.log(a);

// console.log(typeof a)

// 2. Memasukkan array ke dalam object
// Urutannya [NAME, CLUB, AGE]
var insertToObjects = [
  ['Kapten Tsubasa', 'Nankatsu', 19],
  ['Wakabayashi', 'Nankatsu', 20],
  ['Saitama', 'Hero Associate', 18]
]

function createObject2(input) {
  return {
    NAME: input[0],
    CLUB: input[1],
    AGE: input[2]
  }
}

var b = createObject2(insertToObjects);
console.log(b);

// 3. Membuat array menjadi unik

function makeUnique(arrayOfNames) {

}

// console.log(makeUnique(
//   ['Lee Min Ho', 'Lee Kwang Ho', 'Lee Min Ho', 'Lindan']
// ))

// ['Lee Min Ho', 'Lee Kwang Ho', 'Lindan']