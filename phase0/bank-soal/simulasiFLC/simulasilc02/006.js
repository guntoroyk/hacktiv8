/*

Diberikan sebuah function palindromeRecursive(sentenc) yang menerima satu parameter.
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan.
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama.
Contoh, 'katak' dibalik tetaplah 'katak'.

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter

*/


function palindromeRecursive(sentence) {
    if (sentence.length === 1) return true;
    if (sentence[0] !== sentence[sentence.length - 1]) return false;
    // console.log(sentence.slice(1))
    return palindromeRecursive(sentence.slice(1, sentence.length - 1));
}


/**
 * katak
 * k = k
 * 
 * ata
 * a = a
 * 
 * t
 * 
 * katek
 * k = k
 * 
 * ate
 * 
 * 
 */
// TEST CASES
console.log(palindromeRecursive('katak')); // true
console.log(palindromeRecursive('blanket')); // false
console.log(palindromeRecursive('civic')); // true
console.log(palindromeRecursive('kasur rusak')); // true
console.log(palindromeRecursive('mister')); // false
