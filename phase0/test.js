// function jabatan(x) {
//     if (x == 0) {
//         return 0;
//       } else {
//         return jabatan(x / 100) + (x % 100);
//       }
// }

// console.log(jabatan(19823))

function isPalindrome(str) {
    if (str.length === 1) return true;

    if (str[0] !== str[str.length - 1]) return false;

    return isPalindrome(str.slice(1, str.length - 1));
}

console.log(isPalindrome("kasur rusak"))
/**
 * KODOK
 * K = K 
 * 
 * ODO
 * O = 0
 * 
 * D
 * 
 * KODEK
 * K = K
 * 
 * ODE
 * 0!=E
 * 
 */