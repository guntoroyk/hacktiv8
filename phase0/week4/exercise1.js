/**
Bilangan Prima
*/

function angkaPrima(angka) {
    // you can only write your code here!
    if (angka <= 1) {
        return false;
    }
    
    let pembagi = 2;
    while (pembagi != angka) {
        if (angka % pembagi === 0) {
            return false
        }
        pembagi++;
    }
    return true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log(angkaPrima(41)); // false
