/*
================
Poin Calculator
================

[INSTRUCTIONS]
Kamu diminta menghitung poin dari sebuah mendali yang didapat dalam sebuah pertandingan.
poinCalculator adalah sebuah function yang menerima satu parameter berupa string.
function tersebut akan menghitung jumlah Gold aka emas (G), Silver aka perak (S) dan Bronze aka perunggu (B) dan function akan mereturn jumlah masing2 mendali dan menghitung total poin secara keseluruhan.
Adapun ketentuannya:
Gold (G) = 2
Silver (S) = 1
Bronze (B) = 0.5

[RULE]
- WAJIB MENYERTAKAN PSEUDOCODE untuk kasus ini
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string untuk pemecahan masalah.
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()

[EXAMPLE]
poinCalculator("GSB")
output: jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
*/


/**
 * ### PSEUDOCODE ###
 * 
 * STORE `array` with strings
 * STORE `gold`, `silver`, `bronze`, `total` with zero
 * STORE `result` with empty string
 * STORE `i` with zero
 * FOR `i` less than length of `array`
 *    IF `array`[`i`] is equal to `G` THEN
 *        ADD `gold` by 1
 *    ELSE IF `array`[`i`] is equal to `S` THEN
 *        ADD `silver` by 1
 *    ELSE IF `array`[`i`] is equal to `B` THEN
 *        ADD `bronze` by 1
 *    END IF
 * END FOR 
 * 
 * CALCULATE `gold` times by 2 
 * CALCULATE `silver` times by 1
 * CALCULATE `bronze` times by 0.5
 * 
 * SET `total` with summary of the calculation
 *  
 * SET `result` with string "Jumlah Gold: " plus the value of gold ", jumlah Silver: " plus the value of silver  ", jumlah Bronze: " plus the value of bronze ". Dan totalnya adalah: " plus the value of total
 * 
 *  */

function poinCalculator(array) {
    // your code here
    let gold = 0;
    let silver = 0;
    let bronze = 0;
    let total = 0;
    let result = "";

    for (let i = 0; i < array.length; i++) {
      if (array[i] === "G") {
        gold++;
      } else if (array[i] === "S") {
        silver++;
      } else if (array[i] === "B") {
        bronze++;
      }
    }

    total = (gold * 2) + (silver * 1) + (bronze * 0.5)

    result += "Jumlah Gold: " + gold + ", jumlah Silver: " + silver + ", jumlah Bronze: " + bronze + ". Dan totalnya adalah: " + total; 
    return result;
  }
  
  console.log(poinCalculator("GSB"));
  // jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
  console.log(poinCalculator("GGG"));
  // jumlah Gold: 3, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 6
  console.log(poinCalculator("SSB"));
  // jumlah Gold: 0, jumlah Silver: 2, jumlah Bronze: 1. Dan totalnya adalah: 2.5
  console.log(poinCalculator("BBGSSGB"));
  // jumlah Gold: 2, jumlah Silver: 2, jumlah Bronze: 3. Dan totalnya adalah: 7.5
  console.log(poinCalculator(""));
  // jumlah Gold: 0, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 0
  
