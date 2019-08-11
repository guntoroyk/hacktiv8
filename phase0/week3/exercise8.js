function pasanganTerbesar(num) {
    // you can only write your code here!
    var str = String(num);
    var terbesar = 0;
    var pasangan = '';

    for (let i = 0; i < str.length; i++) {
      pasangan = str[i] + str[i+1];

      if (Number(pasangan) > terbesar) {
        terbesar = Number(pasangan);
      }
    }
    return terbesar;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99

//  algoritma
/* 
  1. ubah num ke string
  2. 
*/