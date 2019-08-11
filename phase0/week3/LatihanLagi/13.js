function targetTerdekat(arr) {
    // you can only write your code here!
    let indexX = [];
    let indexO = 0;
    let smallest = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "x") {
            indexX.push(i);
        } else if (arr[i] === "o") {
            indexO = i;
        }
    }

    for (let i = 0; i < indexX.length; i++) {
        if (i === 0) {
            smallest = Math.abs(indexX[0] - indexO);
        } else {
            if (Math.abs(indexX[i] - indexO) < smallest) {
                smallest = Math.abs(indexX[i] - indexO);
            }
        }
    }

    return smallest;
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2