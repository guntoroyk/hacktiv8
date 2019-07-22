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
    hobbies: ["reading", "swimming"]
  }
}

var a = createObject();
// console.log(a);

// console.log(typeof a)

// 2. Memasukkan array ke dalam object
// Urutannya [NAME, CLUB, AGE]
var insertToObjects = [
  ['Kapten Tsubasa', 'Nankatsu', 19, "JAPAN"],
  ['Wakabayashi', 'Nankatsu', 20, "JAPAN"],
  ['Saitama', 'Hero Associate', 18]
]


function createObject2(input) {
  var keys = ['NAME', "CLUB", "AGE", "COUNTRY"];
  var result = [];

  for (var i = 0; i < input.length; i++) {
    var obj = {};

    for (var j = 0; j < keys.length; j++) {  
      obj[keys[j]] = input[i][j];
    }
    // console.log(obj);
    result.push(obj);
  }
  return result;
}

var b = createObject2(insertToObjects);
// console.log(b);

// 3. Membuat array menjadi unik

function makeUnique(arrayOfNames) {
  var result = [];

  for (var i = 0; i < arrayOfNames.length; i++) {
    var exist = false;
    for (var j = 0; j < result.length; j++) {
      if (arrayOfNames[i] === result[j]) {
        exist = true;
        break;
      }
    }

    if (!exist) {
      result.push(arrayOfNames[i]);
    }
  }
  return result;
}

console.log(makeUnique(
  ['Lee Min Ho', 'Lee Kwang Ho', 'Lee Min Ho', 'Lindan']
))

// ['Lee Min Ho', 'Lee Kwang Ho', 'Lindan']