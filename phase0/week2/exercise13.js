function xo(str) {
    // you can only write your code here!
    var jmlX = 0;
    var jmlO = 0;

    for (i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            jmlX += 1;
        } else if (str[i] === 'o') {
            jmlO += 1;
        }
    }
    if (jmlX === jmlO) {
        return true;
    } else {
        return false;
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true