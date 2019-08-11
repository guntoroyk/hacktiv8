function mySplitter(str, delimiter = " ") {
    let newStr = [];

    let temp = "" ;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== delimiter) {
            temp += str[i];
        } else {
            newStr.push(temp);
            temp = "";
        } 
    }
    newStr.push(temp);
    return newStr;
}

var a = "I am a little tea pot";

console.log(mySplitter(a, ' '));