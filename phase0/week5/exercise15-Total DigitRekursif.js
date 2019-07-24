function totalDigitRekursif(angka) {
    // you can only write your code here!
    if (angka === 0) return 0;
    return Number(angka.toString()[0]) + totalDigitRekursif(Number(angka.toString().slice(1)));
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5
