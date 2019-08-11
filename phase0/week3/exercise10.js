function perkalianUnik(arr) {
    // you can only write your code here!
    // dikalikan semua nilai tiap indeks, kemudian dibagi dengan nilai pada indeks tersebut.
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        var multiplied = 1;
        for (let j = 0; j < arr.length; j++) {
            multiplied *= arr[j];
        }
        multiplied /= arr[i];
        newArr[i] = multiplied;
    }
    return newArr;
  }

  //coba kalikan semua dulu baru masukkan ke array satu-satu
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]