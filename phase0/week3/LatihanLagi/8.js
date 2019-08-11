function pasanganTerbesar(num) {
    // you can only write your code here!
    let strNum = num.toString();
    let terbesar = 0;
   

    for (let i = 1; i < strNum.length; i++) {
        let pasangan = "";
        pasangan += strNum[i-1] + strNum[i];
        if (Number(pasangan) > terbesar) {
            terbesar = Number(pasangan)
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