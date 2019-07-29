/*
-------------------
The Number Cruncher
-------------------
PROBLEM
========
Disediakan sebuah function numberCruncher yang bertugas untuk menerima dua parameter
berupa array of number, dan mengembalikan array baru yang merupakan hasil perkalian angka di kedua array tersebut. 
Apabila pada array pertama tidak memiliki pasangan indeks yang sama pada array kedua (atau sebaliknya) maka akan dikalikan dengan angka 0.
Kemudian, dari setiap nilai di dalam array tersebut, ambil yang nilainya ganjil, kemudian kalikan semua nilai ganjil tersebut dan return hasil perkalian ganjilnya.


Pola
----
input: [x, y, z, a, b] dan [d, e, f, g]
proses:
[
  (x * d)
  (y * e)
  (z * f)
  (a * g)
  (b * 0) --> karena b tidak memiliki pasangan di array kedua
]

Contoh
-------
Input: [ 3, 5, 2 ] dan [ 7, 5, 4 ]
Proses:
=> [ (3 * 7) , (5 * 5), (2 * 4) ]
=> [ 21, 25, 8 ]
=> nilai ganjil: 21 dan 25
=> 21* 25
Output: 525


Input: [ 1, 2, 3, 2 ] dan [ 3, 5 ]
Proses:
=> [ (1 * 3), (2 * 5), (3 * 0), (2 * 0) ]
=> [ 3, 10, 0, 0 ]
=> nilai ganjil: 3
Output: 3

Input: [4, 5, 8, 2] dan [9, 1, 2, 4, 9, 2]
Proses:
=> [ 63, 5, 16, 15, 0, 0 ]
=> nilai ganjil: 63, 5, 15
=> 63 * 5 * 15
Output: 4725

RULE:
- tidak boleh menggunakan .map, .filter dan .reduce!
- tidak boleh menggunakan .eval
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE!


*/

/**
 * PSEUDOCODE
 * STORE arrOperand1 and arrOperand2 with any value
 * STORE multiplied with empty string
 * STORE result with 1
 * 
 * IF length of arrOperand1 or length of arrOperand2 equal to 0 THEN
 *    return 0
 * END IF
 * 
 * STORE i with 0
 * WHILE i less than length of arrOperand1 
 *    STORE a with value of arrOperand1 in i
 *    STORE b with value of arrOperand2 in i
 *    
 *    IF a is undefined THEN 
 *      SET a to 0
 *    END IF
 *    IF b is undefined THEN
 *      SET b to 0
 *    END IF
 *    
 *    CALCULATE a times by b
 *    PUSH the calculation result to multiplied
 * 
 *    CALCULATE i plus by 1
 * END WHILE
 * 
 * SET i with 0
 * WHILE i less than length of multiplied 
 *    IF (value of multipled in i modulus by 2 is not equal to 0) THEN
 *        CALCULATE result times by value of multiplied in i
 *        SET result with calculation result
 *        CALCULATE i plus by 1
 * END WHILE
 * 
 * RETURN result
 * 
 */

function multiplyTheOdds(arrOperand1, arrOperand2) {
  // your code here
  let multiplied = [];
  let result = 1;

  if (arrOperand1.length === 0 && arrOperand2.length === 0) return 0;

  for (let i = 0; i < arrOperand1.length; i++) {
    let a = arrOperand1[i];
    let b = arrOperand2[i];

    if (a === undefined) a = 0;
    if (b === undefined) b = 0;

    multiplied.push(a * b);
  }

  for (let i = 0; i < multiplied.length; i++) {
    if (multiplied[i] % 2 !== 0) {
      result *= multiplied[i];
    }
  }
  return result;
}

console.log(multiplyTheOdds([3, 5, 2], [7, 5, 4])); //525
console.log(multiplyTheOdds([1, 2], [1])); //1
console.log(multiplyTheOdds([1, 2, 3, 2], [3, 5])); //3
console.log(multiplyTheOdds([7, 5, 8, 3], [9, 1, 2, 5, 9, 2])); //4725
console.log(multiplyTheOdds([], [])); //0
