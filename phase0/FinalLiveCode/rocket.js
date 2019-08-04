/*
/////
order
/////
Function order ini hanya berfungsi mengurutkan number dari kecil ke besar dalam bentuk string
dan outputnya disatukan dengan satu spasi. Apabila ada angka yang sama selalu urutkan dari paling
kiri.

[RULES]
1. Tidak boleh menggunakan built in function selain .push() dan .unshift()
*/

function order(words) {
  // code here
  // split
  let arrWords = [];
  let arrWordsWithNum = [];
  let result = "";
  
  let word = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== " ") {
      word += words[i];
    } else if (words[i] === " ") {
      if (word.length > 0) {
        arrWords.push(word);
        word = "";
      }
    }
  }
  
  arrWords.push(word);
  // console.log(arrWords);
  
  for (let i = 0; i < arrWords.length; i++) {
    let num = undefined;
    for (let j = 0; j < arrWords[i].length; j++) {
      if (/[0-9]/.test(arrWords[i][j])) {
        num = arrWords[i][j];
        break;
      }
    }
    
    arrWordsWithNum.push([num, arrWords[i]]);
  }
  
  // console.log(arrWordsWithNum);
  
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 1; i < arrWordsWithNum.length; i++) {
      if (arrWordsWithNum[i-1][0] > arrWordsWithNum[i][0]) {
        let temp = arrWordsWithNum[i-1];
        arrWordsWithNum[i-1] = arrWordsWithNum[i];
        arrWordsWithNum[i] = temp;
        sorted = false;
      }
    }
  }
  
  // console.log(arrWordsWithNum);

  for (let i = 0; i < arrWordsWithNum.length; i++) {
    result += arrWordsWithNum[i][1];
    if (i !== arrWordsWithNum.length - 1) result += " ";
  }

  return result;
  //   for (let i = 0; i < arrWords.length; i++) {
  //     let num = undefined;
  //     for (let j = 0; j < arrWords[i].length; j++) {
  //       if (/[0-9]/.test(arrWords[i][j])) {
  //         num = arrWords[i][j];
  //         break;
  //       }
  //     } 
  //     // console.log(num)
  
  //     obj[num] = arrWords[i];
  //   }
  
  //   console.log(obj)
  //   let keys = Object.keys(obj);
  //  for (let i = 0; i < keys.length; i++) {
  //    result += obj[keys[i]];
  //    if (i !== keys.length - 1) {
  //      result += " ";
  //    }
  //  }
}

console.log(order("is2 Thi1s T4est 3a")) // "Thi1s is2 3a T4est
console.log(order("4of Fo-10r       pe6000ople   g3ood    th5e  the2")) // "Fo-10r the2 g3ood 4of th5e pe6000ople"
console.log(order("i1s Thi0s m2e real1")) // "Thi0s i1s real1 2me"
console.log(order("")) // ""