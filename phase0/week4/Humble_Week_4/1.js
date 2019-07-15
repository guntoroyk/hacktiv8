/*
  ////////////
  sumTheNumber
  ////////////

  Function sumTheNumber akan menentukkan jumlah dari angka-angka dalam suatu string.
  Function akan menerima 1 parameter yaitu:
    - stringAngka adalah string yang berisi kumpulan data, tipe datanya string.
    - apabila stringAngka tersebut pada index yang ganjil maka akan ditambahkan
      jumlah kelipatan 2, selain itu cukup jumlahkan langsung.
  Function ini akan mengembalikkan nilai number.
  
  --------
  EXAMPLE:
  --------
  [INPUT]
    var stringNumber = '123456'

  [PROCESS]
  string  : 1   2   3   4   5   6
  index   : 0   1   2   3   4   5
  result  : 1 (2*2) 3 (2*4) 5 (2*6) => 1 + 4 + 3 + 8 + 5 + 12

  [OUTPUT]
    33

  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .unshift(), dan di RULES lain.
    2. Diperbolehkan untuk menggunakan built in untuk mengubah tipe data String ke Number, ataupun sebaliknya.
    2. Diasumsikan string selalu ada nilainya dan nilainya positif.
    3. WAJIB menggunakan PSEUDOCODE atau nilai 0.
*/

/**
 * #### PSEUDOCODE ####
 * 
 * STORE `sringNumber` with string of numbers
 * STORE `sum` with zero
 * STORE `index` with zero
 * FOR `index` less than `stringNumber` length
 *      IF `index` mod by 2 not equal 0 THEN
 *          CONVERT `stringNumber[`index`]` to Number
 *          CALCULATE `stringNumber[`index`]` times by 2
 *          SET `sum` to `sum` add by the result of calculation
 *      ELSE
 *          CONVERT `stringNumber[`index`]` to Number
 *          SET `sum` to `sum` add by `stringNumber[`index`]`
 *      END IF
 *      ADD `index` by 1
 * END FOR
 * 
 * RETURN `sum`
 * 
 */

function sumTheNumber(stringNumber) {
  // code here
  let sum = 0;
  for (let i = 0; i < stringNumber.length; i++) {
    if (i % 2 !== 0) {
      sum = sum + 2 * Number(stringNumber[i]);
    } else {
      sum += Number(stringNumber[i]);
    }
  }
  return sum;
}

console.log(sumTheNumber('123456')) // 33
console.log(sumTheNumber('341231')) // 21
console.log(sumTheNumber('1')) // 1
console.log(sumTheNumber('01')) // 2