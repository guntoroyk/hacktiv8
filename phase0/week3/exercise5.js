function palindrome(kata) {
    // you can only write your code here!
    var balikKata = '';
    for (var i = kata.length - 1; i >= 0; i--) {
        balikKata += kata[i];
    }
    if (kata === balikKata) {
      return true;
    }
    return false;
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
  console.log(palindrome('anna')); // true
  console.log(palindrome('send')); // false
  console.log(palindrome('level')); // true

