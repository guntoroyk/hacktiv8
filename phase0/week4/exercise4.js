function bubbleSort(arr) {
    let swapped = false;
    while (swapped == false) {
        swapped = true;
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped  = false;
            }
        }
    }
    return arr;
}

function cariModus(arr) {
    // arr = bubbleSort(arr);
    let modus = -1;
    let terbanyak = 1;
    
    let first = arr[0];
    let same = true;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            same = false;
        }
    }
    
    if (!same) {
        for (let i = 0; i < arr.length; i++) {
            let count = 1;
            for (let j = 0; j < arr.length; j++) {
                if (j !== i) {
                    if (arr[j] === arr[i]) {
                        count++;
                    }
                }
            }
            if (count > terbanyak) {
                terbanyak = count;
                if (terbanyak > 1) {
                    modus = arr[i];
                } else {
                    modus = -1;
                }
            }
        }    
    }
    
    return modus;
    
}

// TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4, 5])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1