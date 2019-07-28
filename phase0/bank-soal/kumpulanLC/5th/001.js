/*
Array Remover
Array remover merupakan sebuah function yang berfungsi untuk menghapus value
dari sebuah array yang diberikan berdasarkan jumlah yang ingin dihapus dan index
mulai.

Array remover menerima tiga parameter yaitu array of number, index untuk mulai
menghapus dan jumlah data yang akan dihapus

Contoh:
Input:
  array: [ 666, 666, 333, 10, 5, 6]
  index: 1
  count: 2

Output:
  [ 666, 10, 5, 6 ]

RULES:
  - WAJIB MENYERTAKAN ALGORITMA / PSEUDOCODE
  - Dilarang menggunakan built-in function .map, .filter, .reduce!
*/
 
function arrayRemover (array, index, count) {
  // your code here
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let same = false;
    for (let j = index; j < index + count; j++) {
      if (i === j) {
        same = true;
        break;
      }
    }
    if (!same) result.push(array[i]);
  }

  return result;
}

/**
 * PSEUDOCODE
 * STORE `array` with array of number
 * STORE `index` with any number
 * STORE `count` with any number
 * STORE `result` with empty array
 * STORE `i` with 0
 * FOR `i` less than length of array 
 *    STORE `same` with false
 *    STORE `j` with value of `index`
 *    FOR `j` less than `index` plus `count`
 *        IF `i` same with `j` THEN
 *            SET `same` to true
 *        END IF
 *        CALCULATE `j` plus by 1
 *    END FOR
 * 
 *    IF `same` is false THEN
 *        PUSH value of array on `i` index to `result`
 *    END IF
 *    CALCULATE `i` plus by 1
 * END FOR
 * RETURN `result`
 */

console.log(arrayRemover([ 1, 2, 3] , 0 , 2 )); // [3]
 console.log(arrayRemover([ 666, 666, 333, 10, 5, 6] , 1 , 2 )); // [ 666, 10, 5, 6 ]
console.log(arrayRemover([ 1, 2, 3], 0, 3)) // []
