// function fpb(angka1, angka2) {
//     // you can only write your code here!
//     let terbesar = 0;
//     if (angka1 >= angka2) {
//         terbesar = angka1
//     } else {
//         terbesar = angka2;
//     }
//     for (let i = terbesar; i > 0; i--) {
//         let faktor1= 0;
//         if (angka1 % i === 0) {
//             faktor1 = i;
//         }
//         let faktor2= 0;
//         if (angka2 % i === 0) {
//             faktor2 = i;
//         }

//         if (faktor1 !== 0 && faktor2 !== 0) {
//             if (faktor1 === faktor2) {
//                 return i;
//             }
//         }
//     }
//   }

function fpb(angka1, angka2) {
    // you can only write your code here!
       let answer = 0;
       for (let i = 0; i < angka1 || i < angka2; i++) {
           if (angka1 % i === 0 && angka2 % i === 0) {
               answer = i;
           }
       }
       return answer;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1