function urutkanAbjad(str) {
    // you can only write your code here!
    
    // split str to array and store it to strArray
    let strArray = [];
    for (let i = 0; i < str.length; i++) {
        strArray.push(str[i]);
    }
    
    // then sort it in ascending
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < strArray.length; i++) {
            if (strArray[i] > strArray[i+1]) {
                let temp = strArray[i];
                strArray[i] = strArray[i+1];
                strArray[i+1] = temp;
                sorted = false;
            }
        }
        
        // console.log(sorted);
    }
    
    // and then join it again into string
    let result = "";
    for (let i = 0; i < strArray.length; i++) {
        result += strArray[i];
    }

    return result;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'