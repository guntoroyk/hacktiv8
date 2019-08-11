function mySubstring(str, start, end = str.length) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (i >= start && i < end) {
            newStr += str[i];
        }
    }
    return newStr;
}

let a = "Guntoro Yudhy Kusuma";

console.log(mySubstring(a, 0, 3)); // Gun
console.log(mySubstring(a, 8)); // Yudhy Kusuma
console.log(mySubstring(a, 14, 18)); // Kusu