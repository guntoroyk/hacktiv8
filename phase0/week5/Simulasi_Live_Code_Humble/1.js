/*
SELECT OPTION
Select Option adalah sebuah fungsi untuk mengambil nilai tengah atau median dari
array hasil kelipatan dari keynya.
Fungsi akan menerima parameter berupa array dan key yang ingin dicari.

EXAMPLE
INPUT: array = [1, 2, 3, 4, 5, 6, 7], key = 2
PROCESS: [2, 4, 6] adalah array yang merupakan kelipatan 2
MEDIAN: 4
OUTPUT: 4 adalah nilai median dari array di process

INPUT: array = [1, 2, 3, 4, 5, 6], key = 1
PROCESS: [1, 2, 3, 4, 5, 6] adalah array yang merupakan kelipatan 1
MEDIAN: (3 + 4)/2
OUTPUT: 3.5 adalah nilai tengah dari array di process

RULES:
1. Tidak boleh menggunakan built in function selain .push(), Math, dan .unshift()
2. WAJIB menggunakan PSEUDOCODE
*/

/**
* PSEUDOCODE
  STORE `array` with any array of numbers
  STORE `key` with any integer
* STORE `arr` with empty array
  FOR `index` less than length of array
      IF `array`[`index`] modulus by `key` is same with 0 THEN
          PUSH array to `index` to arr
      END IF

      STORE `median` with zero
      IF length of `arr` modulus by 2 same with zero THEN
         STORE `index` with the result of length of `arr` divided by 2
         CALCULATE `arr`[`index`] plus by `arr`[`index` minus 1] then divide it by 2
         SET `median` with the calculation result
      ELSE
         CALCULATE length of `arr` minus 1 the divided it by 2
         SET `index` with the calculation result
         SET `median` with value of `arr`[`index`];
      END IF


      IF length of `arr` is zero THEN
          return "There's not option"
      ELSE 
          return `median`
      END IF 
  END FOR
*/

function selectOption(array, key) {
  // code below here
  let arr = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % key === 0) arr.push(array[i]);
  }
  // console.log(arr)
  
  // jika genap
  let nilaiTengah = 0;
  if (arr.length % 2 === 0) {
    let index = arr.length/2;
    nilaiTengah = (arr[index] + arr[index - 1]) / 2;
  } else {
    let index = (arr.length - 1) / 2;
    nilaiTengah = arr[index];
  }

  if (arr.length === 0) return "There's not option";
  return nilaiTengah;
}

// TEST CASE
console.log(selectOption([1, 2, 3, 4, 5, 6, 7], 2)) // 4
console.log(selectOption([1, 2, 3, 4, 5, 6], 1)) // 3.5
console.log(selectOption([1, 2, 3, 4, 5, 6], 3)) // 4.5
console.log(selectOption([1, 2, 3, 4, 5, 6], 4)) // 4
console.log(selectOption([1, 2, 3, 4, 5, 6], 7)) // There's not option


