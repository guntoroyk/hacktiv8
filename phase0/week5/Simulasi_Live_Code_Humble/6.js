/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  // code here
  let strNum = equation.toString();
  // '4321'

  if (strNum.length === 0) return "";

  let pow = Number(strNum[0]) * Math.pow(10, strNum.length - 1);
  let sisa = Number(strNum.slice(1));

  // console.log("strNum", strNum);
  // console.log(sisa)
  // console.log(pow.toString())
  if (sisa === 0) return pow.toString();
  
  return pow.toString() + "+" + parseNumber(sisa);
}

// console.log(parseNumber(4321)) // 4000+300+20+1
// console.log(parseNumber(90)) // 90
console.log(parseNumber(550050)) // 