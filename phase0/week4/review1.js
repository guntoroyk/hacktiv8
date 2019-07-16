/*
  Array:
    1. Mengakses data dalam array
    2. Membuat kondisional dalam array dan looping
    3. Metode flag
  Multidimensional Array:
    1. Mengakses dala dalam multidimensional array
    2. Membuat kondisional dalam array, looping, dan nested looping
    3. Object reference
*/

// Contoh 1
// Mengakses data dalam array (coba)
function example1(artists) {
  return artists[artists.length - 1];
}

var names = ['Ari', 'Lasso', 'Titi', 'DJ']
// console.log('Contoh 1:', example1(names));
// console.log('Contoh 1:', example1(names));
// 'DJ'

// Contoh 2
// Membuat kondisional dalam array dan looping
// Mencari string mana dalam suatu array yang paling panjang stringnya
function example2(artists) {
  var longestName = artists[0]
  for (var i = 1; i < artists.length; i++) {
    if (artists[i].length > longestName.length) {
      longestName = artists[i]
    }
  }
  return longestName;
}

// console.log('Contoh 2:', example2(['Ari', 'Lasso', 'Titi', 'DJ']));
// 'Lasso'

// Contoh 3
// Membuat metode flagging
// Menghapus nama yang memiliki huruf a, gunakan splice
// function example3(artists) {
//   var result = []
//   for (var i = 0; i < artists.length; i++) {
//     var containsA = false
//     for (var j = 0; j < artists[i].length; j++) {
//       if (artists[i][j].toLowerCase() === 'a') {
//         containsA = true
//         break;
//       }
//     }
//     if (containsA === false) {
//       result.push(artists[i])
//     }
//   }
//   return result;
// }

function example3(artists) {
  var i = 0
  while (i < artists.length) {
    var containsA = false
    for (var j = 0; j < artists[i].length; j++) {
      if (artists[i][j].toLowerCase() === 'a') {
        containsA = true
        break;
      }
    }
    if (containsA === true) {
      artists.splice(i, 1)
    } else {
      i++
    }
  }
  return artists;
}

// console.log('Contoh 3:', example3(['Aria', 'Lasso', 'Titi', 'DJ']));
// ekspektasi ['Titi', 'DJ']

// Contoh 4
// Mengakses data dalam multidimensi array
function example4(artists) {
  var lastNames = []
  for (var i = 0; i < artists.length; i++) {
    lastNames.push(artists[i][artists[i].length - 1])
  }
  return lastNames;
}

// console.log('Contoh 4:', example4([['Ari', 'Lasso'], ['Titi', 'DJ']]));
// ['Lasso', 'DJ']

// Contoh 5
// Object reference
// Membuat segitiga multidimensi array
// function example5(artists) {
//   var result = []
//   for (var i = 0; i < artists.length; i++) {
//     var namaSementara = []
//     for (var j = 0; j < i + 1; j++) {
//       namaSementara.push(artists[j])
//     }
//     result.push(namaSementara)
//   }
//   return result;
// }


// kalau array dia reference, kalau string tidak
function example5(artists) {
  var result = []
  // var namaSementara = ''
  var namaSementara = []
  for (var i = 0; i < artists.length; i++) {
    // namaSementara += artists[i]
    namaSementara.push(artists[i])
    result.push(namaSementara)
    result.push(namaSementara.slice())
  }
  return result;
}

// 0 ['Ari'] ===== ['Ari']
// 1 ['Ari', 'Lasso']  ==== ['Ari', 'AriLasso']

console.log('Contoh 5:', example5(['Ari', 'Lasso', 'Titi', 'DJ']));

// [
//   ['Ari'],
//   ['Ari', 'Lasso'],
//   ['Ari', 'Lasso', 'Titi'],
//   ['Ari', 'Lasso', 'Titi', 'DJ'],
// ]

// [
//   'Ari',
//   'AriLasso',
//   'AriLassoTiti',
//   'AriLassoTitiDJ',
// ]