/**

  Diberikan sebuah function countMe yang menerima sebuah parameter array of string.
  Function ini akan me-return object literal dimana isi dari object tersebut berisi
  jumlah karakter pada array of string

  Contoh:
  input: [ 'dimitri', 'awtian', 'icha' ]
  output:
    {
      d: 1,
      i: 5,
      m: 1,
      t: 2,
      r: 1,
      a: 3,
      w: 1,
      n: 1,
      c: 1,
      h: 1
    }
**/

function countMe(names) {
  //your code here
  let result = {};

  for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < names[i].length; j++) {
      let keys = Object.keys(result);
      let exist = false;
      for (let k = 0; k < keys.length; k++) {
        if (names[i][j] === keys[k]) {
          exist = true;
          break;
        }
      }

      if (!exist) {
        result[names[i][j]] = 1;
      } else {
        result[names[i][j]] += 1;
      }
    }
  }
  return result;
}

console.log(countMe(['dimitri', 'awtian', 'icha']));
//{
//   d: 1,
//   i: 5,
//   m: 1,
//   t: 2,
//   r: 1,
//   a: 3,
//   w: 1,
//   n: 1,
//   c: 1,
//   h: 1
// }

console.log(countMe(['dimas', 'ryan', 'akbar', 'tama']));
// {
//   d: 1,
//   i: 1.
//   m: 2,
//   a: 6,
//   s: 1,
//   r: 2,
//   y: 1,
//   n: 1,
//   k: 1,
//   b: 1,
//   t: 1
// }
