function konversiMenit(menit) {
    // you can only write your code here!
    var m = Math.floor(menit / 60);
    var d = menit % 60;

    if (d === 0) {
        return `${m}:00`;
    } else if (d < 10) {
        return `${m}:0${d}`;
    } else {
        return `${m}:${d}`;
    }
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00