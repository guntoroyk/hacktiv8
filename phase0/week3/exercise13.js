function targetTerdekat(arr) {
    // you can only write your code here!
    var xIndex = [];
    var oIndex = null;
    var terkecil = 0;
    var selisih = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            xIndex.push(i);
        }
        if (arr[i] === 'o') {
            oIndex = i;
        }
    }

    if (oIndex === null) return 0 // jika tidak ada o maka return 0

    for (let j = 0; j < xIndex.length; j++) {
        if (j === 0) {
            terkecil = Math.abs(xIndex[j] - oIndex)
        } else {
            selisih = Math.abs(xIndex[j] - oIndex)
            if (selisih < terkecil) {
                terkecil = selisih;
            }
        }
    }
    
    return terkecil;
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', '', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

// targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])