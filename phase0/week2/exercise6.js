// `==========================================
// 1. Melakukan Looping Menggunakan While
// ===========================================
// `
console.log(`==========================================
1. Melakukan Looping Menggunakan While
===========================================
`)
var number = 2;

console.log('LOOPING PERTAMA');
while (number <= 20) {
    console.log(`${number} - I love coding`);
    number = number + 1;
}

console.log('LOOPING KEDUA');
number = 20;
while (number >= 2) {
    console.log(`${number} - I will become fullstack developer`);
    number = number - 1;
}

// `==========================================
// 2. Melakukan Looping Menggunakan For
// ===========================================
// `
console.log();
console.log(`==========================================
2. Melakukan Looping Menggunakan For
===========================================
`);

console.log('LOOPING PERTAMA');

for (number = 1; number <= 20; number++) {
    console.log(`${number} - I love coding`);
}

console.log('LOOPING KEDUA');

for (number = 20; number >= 1; number--) {
    console.log(`${number} - I will become fullstack developer`);
}


// `==========================================
// 3. Angka Ganjil dan Genap
// ===========================================
// `
console.log();
console.log(`==========================================
3. Angka Ganjil dan Genap
===========================================
`);
console.log('### counter dengan penambahan 1 ###');

for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log('GENAP');
    } else {
        console.log('GANJIL')
    }
}

console.log('#### counter dengan penambahan 2 ###');
for (var i = 1; i <= 100; i+=2) {
   if (i % 3 === 0) {
        console.log(i + ' KELIPATAN 3');
    }
}

console.log('### counter dengan penambahan 5 ###');
for (var i = 1; i <= 100; i+=5) {
    if (i % 6 === 0) {
        console.log(i + ' KELIPATAN 6');
    } 
}

console.log('### counter dengan penambahan 9 ###');
for (var i = 1; i <= 100; i+=9) {
    if (i % 10 === 0) {
        console.log(i + ' KELIPATAN 10');
    }
}