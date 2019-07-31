/*
========
MARATHON
========

[INSTRUCTION]
Kamu mengikuti lomba marathon, dengan rute lintasan tertentu dan stamina tertentu;

[EXAMPLE]
input lintasan: 'XXXXXXOOO-XXOOXXXXXOO-XXXXO'

'X' adalah jalan datar yang akan mengkonsumsi 1 stamina dengan maskimal repetisi 'X' 4 kali  ('XXXX')
'O' adalah jalan menanjak yang akan mengkonsumsi 1 stamina dengan maksimal repetisi 'O' 2 kali ('OO')
'-' adalah spot minum meningkatkan 2 stamina

partisi track:   XXXX XX OO O -  X   X O   O X   X  X  X XOO-XXXXO
stamina      : 5    4  3  2 1 3      2     1           0 (ENERGI HABIS, TIDAK BISA MELANJUTKAN)
jarak lari   :   1234 56 78 9 10 11,12 13,14 15,16,17,18
input stamina: 5
output: Selamat anda telah menempuh jarak 18

[RULES]
- Dilarang menggunakan .split, .join, .map, .sort, .filter, .indexOf, .includes
- WAJIB menggunakan pseudocode

*/

function marathon(track, stamina) {
    let batasan = ['XXXX', 'OO', '-'];
    
    let countX = ""
    let countY = "";
    
    let temp = track[0];
    let km = 1;
    for (let i = 1; i < track.length; i++) {
        console.log("temp", temp);
        console.log(stamina);
        if (stamina > 0) {
            if (track[i] === temp[0]) {
                if (temp[0] === 'X' && temp.length <= 4) {
                    temp += track[i];
                } else {
                    stamina -= 1;
                    temp = "";
                    // km++;
                }
                
                if (temp[0] === 'O' && temp.length <= 2) {
                    temp += track[i];
                } else {
                    stamina -= 1;
                    temp = "";
                    // km++;
                }
            } else {
                if (track[i] === 'X' || track[i] === 'O') {
                    stamina -= 1;
                    temp = track[i];
                    // km++;
                } else if (track[i] === '-') {
                    stamina += 2;
                    temp = track[i];
                    // km++;
                }
            }
            km++;
        }
    }
    console.log(km);
}

console.log(marathon('XXXXXXOOO-XXOOXXXXXOO-XXXXO', 5)); //Selamat anda telah menempuh jarak 18 km
// console.log(marathon('XXXXXXOOOXXOOXXXXXOOXXXXO', 5)); //Selamat anda telah menempuh jarak 11 km
// console.log(marathon('XXXXXXXX', 3)); //Selamat anda telah menempuh garis finish



















































// var runLength = 0;
//     var temp = '';
//     var xCount = 0;
//     var oCount = 0;
//     for(var i=0;i<track.length && stamina >= 0;i++){
//         if (track[i] === '-') {
//             temp = '';
//             stamina += 2;
//         } else if (temp === '') {
//             temp = track[i];
//             stamina -= 1;
//             if (xCount === 4) {
//                 xCount = 0;
//             } else if (xCount === 2) {
//                 oCount = 0;
//             }
//         } else if (temp === 'X' && track[i] === 'X') {
//                 xCount += 1;
//                 if (xCount === 3) {
//                     temp = '';
//                 }
//         } else if (temp === 'O' && track[i] === 'O') {
//             oCount += 1;
//             if (oCount === 1) {
//                 temp = '';
//             }
//         } else if (temp !== track[i]) {
//             temp = track[i];
//             stamina -= 1;
//             xCount = 0;
//             oCount = 0;
//         }
//         if (stamina >= 0) {
//             runLength ++;
//         }
//     }
//     if (stamina > 0) {
//         return 'finish'
//     }
//     return runLength;











// var lengthRun = 0;
//     for (var i = 0; i < track.length && stamina > 0; i++) {
//         if (track[i] === '-') {
//             stamina += 2;
//             lengthRun += 1;
//         } else if (track[i] === 'O' && track[i + 1] === 'O') {
//             stamina -= 1;
//             lengthRun += 2;
//             i += 1;
//         } else if (track[i] === 'O') {
//             stamina -= 1;
//             lengthRun += 1;
//         } else if (track[i] === 'X' && track[i + 1] === 'X' && track[i + 2] === 'X' && track[i + 3] === 'X') {
//             stamina -= 1;
//             lengthRun += 4;
//             i += 3;
//         } else if (track[i] === 'X' && track[i + 1] === 'X' && track[i + 2] === 'X') {
//             stamina -= 1;
//             lengthRun += 3;
//             i += 2;
//         } else if (track[i] === 'X' && track[i + 1] === 'X') {
//             stamina -= 1;
//             lengthRun += 2;
//             i += 1;
//         } else if (track[i] === 'X') {
//             stamina -= 1;
//             lengthRun += 1;
//         }
//     }
//     if (stamina > 0) {
//         return 'finish'
//     }
//     return lengthRun;