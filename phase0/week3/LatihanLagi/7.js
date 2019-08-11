function hitungJumlahKata(kalimat) {
    // you can only write your code here!
   let count = 0;
   for (let i = 0; i < kalimat.length; i++) {
       if (kalimat[i] === " ") {
           count++
       }
   }
   return count + 1;
}

function mySplit(input, delimiter= " ") {
    let result = [];
    let chr = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== delimiter) {
            chr += input[i];
        } else {
            result.push(chr)
            chr = "";
        }
    }
    result.push(chr)
    return result;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5