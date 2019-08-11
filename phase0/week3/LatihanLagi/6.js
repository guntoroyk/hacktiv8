function angkaPalindrome(num) {
    // you can only write your code here!
    while (true) {
        num++

        let strNum = num.toString();
        let isPalindrome = true;

        for (let i = 0; i < strNum.length; i++) {
            if (strNum[i] !== strNum[strNum.length - 1 - i]) {
                isPalindrome = false
            }
        }

        if (isPalindrome) {
            return num;
        }
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  console.log(angkaPalindrome(932)); // 939
  console.log(angkaPalindrome(9999999999999999999999999999999999999999999999999999999999999999)); // 939
