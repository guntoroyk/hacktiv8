function checkAB(num) {
    // you can only write your code here!
    /**
    * 1. cari index a dan b, simpan di array
    * 2. cek apakah a dan b ditemukan di string tersebut. jika tidak langsung return false
    * 3. cari selisih index a dan b 
    * 4. jika ditemukan selisih sama dengan 3 maka true, jika tidak false
    */
    
    let indexA = [];
    let indexB = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] === "a") {
            indexA.push(i);
        } else if (num[i] === "b") {
            indexB.push(i);
        }
    }    
    // console.log('index a:', indexA)
    // console.log('index b:', indexB)
    
    let selisih = 0;
    
    // cek apakah ditemukan a dan b di dalam string
    if (indexA.length > 0 && indexB.length > 0) {

        // cari yg selisih - 1 = 3
        for (let i = 0; i < indexA.length; i++) {
            for (let j = 0; j < indexB.length; j++) {
                selisih = Math.abs(indexA[i] - indexB[j]);
                if (selisih - 1 === 3) {
                    return true;
                }
            }    
        }
        return false;
        
    } 

    return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false


var a = [0, 4]
var b = [1, 2, 5] 

// for (let i = 0; i < b.length || i < a.length; i++) {
//     console.log(i)
// }