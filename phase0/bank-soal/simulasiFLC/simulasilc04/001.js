/*
================
Format Uang (KBBI)
================

[INSTRUCTIONS]

formatUang adalah sebuah function yang menerima satu parameter berupa number.
function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
Rp1.500,00

[RULE]
- Wajib menggunakan Pseudocode/Algoritma
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
formatUang(2000)

output: Rp2.000,00
*/


    
/*

DISPLAY 'output'
*/

/**
 *  PSEUDOCODE
 *  STORE number with any number
 *  STORE str with empty string
 *  STORE count with 1; 
 *  CONVERT number to string
 *  STORE i with length of number minus 1
 *  WHILE i greater or same than 0 
 *     SET str with value of number in i plus by str
 *     IF count mod by 3 equal to 0 and i not 0 THEN
 *        SET str with "." plus by str
 *     END IF
 *     CALCULATE count plus by 1
 *     CALCULATE i minus by 1
 *  END WHILE
 *  DISPLAY str
 */
function formatUang(number) {
  //code here
  number = number.toString();
  let str = "";
  count = 1;
  for (let i = number.length - 1; i >= 0; i--) {
    str = number[i] + str;
    if (count % 3 === 0 && i !== 0) {
      str = "." + str;
    }
    count++;
  }
  // console.log(str)
  str = "Rp" + str + ",00";
  return str;
}

console.log(formatUang(7500)); // Rp7.500,00
console.log(formatUang(250)); // Rp250,00
console.log(formatUang(100000)); // Rp100.000,00
console.log(formatUang(1000000)); // Rp1.000.000,00
console.log(formatUang(4999999)); // Rp4.999.999,00
