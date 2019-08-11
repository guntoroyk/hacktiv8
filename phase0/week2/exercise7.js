//1. Menyusun Barisan Bintang

console.log('1. Menyusun Barisan Bintang')
var rows1 = 5;

for (var i = 1; i <= rows1; i++){
    console.log('*')
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('2. Menyusun Barisan Bintang Dengan Nested Looping')
var rows2 = 5;

for (var i = 1; i <= rows2; i++) {
    var str = ''
    for (var j = 1; j <= rows2; j++) {
        str += '*'
    }
    console.log(str)
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('3. Menyusun Barisan Tangga Bintang Dengan Nested Looping')
var rows3 = 7;
for (var i = 1; i <= rows3; i++) {
    var str = ''
    for (var j = 1; j <= i; j++) {
        str += '*'
    }
    console.log(str)
}