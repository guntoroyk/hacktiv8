/*
================
Format Uang (KBBI)
================

[INSTRUCTIONS]

formatUang adalah sebuah function yang menerima satu parameter berupa number.
function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
Rp1.500,00

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!
*/

function formatUang(number) {
  // code below here
  let strNum = number.toString();
  let formattedStr = "";
  let count = 1;
  for (let i = strNum.length - 1; i >= 0; i--) {
    formattedStr = strNum[i] + formattedStr;
    if (count % 3 === 0 && i !== 0) {
      formattedStr = "." + formattedStr;
    }
    count++
  }
  return formattedStr;
}

console.log(formatUang(7500)); // Rp7.500,00
console.log(formatUang(250)); // Rp250,00
console.log(formatUang(100000)); // Rp100.000,00
console.log(formatUang(1000000)); // Rp1.000.000,00
console.log(formatUang(4999999)); // Rp4.999.999,00
