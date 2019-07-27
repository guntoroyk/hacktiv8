/*
HEROES
Heroes adalah sebuah fungsi untuk menentukkan karakter apa saja yang disukai
orang sehingga yang duplikat tidak perlu dicatat.
Fungsi akan menerima parameter berupa string

EXAMPLE
INPUT: "saitama&&naruto&&nobita&&nobita&&saitama&&sasuke"
OUTPUT: [saitama, naruto, nobita, sasuke]

RULES:
1. Tidak boleh menggunakan built in function selain .push(), .unshift()
*/

function Heroes(hero) {
  let result = [];
  let str = ""
  for (let i = 0; i < hero.length; i++) {
    if (hero[i] !== "&") {
      str += hero[i];
    } else {
      if (str.length > 0) {
        result.push(str);
        str = "";
      }
    }
  }
  result.push(str);

  let newResult = [result[0]];
  for (let i = 1; i < result.length; i++) {
    let same = false;
    for (let j = 0; j < newResult.length; j++) {
      if (result[i] === newResult[j]) {
        same = true;
        break;
      }
    }

    if (!same) newResult.push(result[i]);
  }

  return newResult;
}
  
  // TEST CASE
  console.log(Heroes("saitama&&naruto&&nobita&&nobita&saitama&&sasuke"))
  // [ 'saitama', 'naruto', 'nobita', 'sasuke' ]
  console.log(Heroes("doraemon&&sakura&&inuyasha&&saitama&&shoji&&ikan indosiar"))
  // [ 'doraemon', 'sakura', 'inuyasha', 'saitama', 'shoji', 'ikan indosiar' ]
  console.log(Heroes(""))
  // There's no heroes
  