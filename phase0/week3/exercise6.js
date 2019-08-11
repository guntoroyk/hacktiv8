/*  idenya adalah...
*   cari angka setelah num dengan menambahkan angka satu menggunakan while
        while berjalan sampai palindrom berubah menjadi true
*   cek setiap angka tersebut apakah palindrome dengan cara:
        1. ubah ke string
        2. gunakan for untuk mengecek apakah ia palindrom atau bukan
        3. jika ya, set palindrom = true lalu ubah lagi ke number
        4. kembalikan nilai tsb
*   
*/

// function angkaPalindrome(num) {
//     // you can only write your code here!
//     var palindromNum = -1;
//     var palindrome = false;
//     while (palindrome !== true) {
//         num++
//         var strNum = String(num);
//         var reverseStrNum = '';
//         for (var j = strNum.length - 1; j >= 0; j--) {
//             reverseStrNum += strNum[j];
//         }
//         if (reverseStrNum === strNum) {
//             palindromNum = Number(reverseStrNum);
//             palindrome = true;
//         }
//     }
//     return palindromNum;
//   }

function angkaPalindrome(num) {
    // you can only write your code here!
    while (true) {
        num++
        var strNum = String(num);
        var reverseStrNum = '';
        
        for (var j = strNum.length - 1; j >= 0; j--) {
            reverseStrNum += strNum[j];
        }

        if (reverseStrNum === strNum) {
            return Number(reverseStrNum);
        }
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001