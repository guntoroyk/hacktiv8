function sorting(arrNumber) {
    // code di sini
    let sorted = false;
    while (!sorted) {
        sorted = true;

        for (let i = 0; i < arrNumber.length; i++) {
            if (arrNumber[i] > arrNumber[i+1]) {
                let temp = arrNumber[i];
                arrNumber[i] = arrNumber[i+1];
                arrNumber[i+1] = temp;
                sorted = false;
            }
        }
    }
    return arrNumber;
  }
  
  function getTotal(arrNumber) {
    // code di sini
    let result = "";
    let biggestNum = {
        num: 0,
        count: 0
    }

    for (let i = 0; i < arrNumber.length; i++) {
       if (arrNumber[i] > biggestNum.num) {
           biggestNum.num = arrNumber[i];
           biggestNum.count = 1;
       } else if (arrNumber[i] === biggestNum.num) {
           biggestNum.count += 1;
       }
    }

    if (arrNumber.length !== 0) result = "angka paling besar adalah " + biggestNum.num + " dan jumlah kemunculan sebanyak " + biggestNum.count + " kali";
    
    return result;
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''