function kaliTerusRekursif(angka) {
    let arrAngka = angka.toString().split("");
    let hasilKali = 1;
    for (let i = 0; i < arrAngka.length; i++) {
        hasilKali *= Number(arrAngka[i]);
    }
    
    if (hasilKali > 9) return kaliTerusRekursif(hasilKali);
    return hasilKali;
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
console.log(kaliTerusRekursif(120)); // 0

/**
* kali(66)
* 6  kali(6)
*    6  kali("")
*    6  1
* 6  6
* 36
* kali(36)
* 3  kali(6)
*    6 kali("")
*    6 1
* 3  6
* 18
* kali(18)
* 1  kali(8)
*    8 kali("")
*    8 1
* 1  8
* 8
* 
* 
* 
*/