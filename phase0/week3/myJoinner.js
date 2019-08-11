function myJoinner(arr, separator=",") {
    let str = "";

    for (let i = 0 ; i < arr.length; i++) {
        str += arr[i];
        if (i !== arr.length - 1) {
            str += separator;
        }
    }
    
    return str;
}

let arr = [3, 06, 1999];

console.log(myJoinner(arr, '-')); // Guntoro,Yudhy,Kusuma
