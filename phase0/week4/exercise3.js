function cariMedian(arr) {
    // you can only write your code here!
    let length = arr.length - 1;
    let i = Math.floor(length / 2);

    if (arr.length % 2 !== 0) {
        return arr[i];
    } else {
        return (arr[i] + arr[i+1]) / 2;
    }
  }


  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
