function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    let faktor = [];
    for (let i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            if (i !== faktor[1]) {
                faktor.push([i, angka/i]);
            }
        }
    }

    return faktor;
  }
  
  // TEST CASES
//   console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
//   console.log(digitPerkalianMinimum(20)); // 2
//   console.log(digitPerkalianMinimum(179)); // 4
//   console.log(digitPerkalianMinimum(1)); // 2

  /**
   * 20
   * 1 20
   * 2 10
   * 4 5
   * 
   */