function bubbleSort(arr) {
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[i+1]) {
                let temp = arr[i];
                arr[i]  = arr[i+1];
                arr[i+1] = temp;
                sorted = false;
            }
        }
    }

    return arr;
}

let input = [3, 2, 100, 9, 02, 8, 10, 22];
console.log(bubbleSort(input));