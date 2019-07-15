var arial = [ 88, 12, 42, 5, 7, 8, 90 ];
// function sortNumber(number) {
//     var result = [];
//     while (number.length > 0) {
//         smallest = number[0];
//         for (var i = 1; i < number.length; i++) {
//             if (smallest > number[i]) {
//                 smallest = number[i];
//             }
//         }
//         for (var j = 0; j < number.length; j++) {
//             if (smallest === number[j]) {
//                 number.splice(j, 1);
//             }
//         }
//         result.push(smallest);
//     }
//     return result;
// }
// console.log(sortNumber(number));
// console.log(number.splice(5, 1));
// console.log(number);
function susunNomor(aa) {
    var hasil = [];
    while (aa.length > 0) {
        var angkaKecil = cariTerkecil(aa);
        hasil.push(angkaKecil[1]);
        aa.slice(angkaKecil[0], 1);
    }
    return hasil;
}
function cariTerkecil(aa) {
    var terkecil = [ 0, aa[0] ];
    for (var i = 1; i < aa.length; i++) {
        if (aa[i] < terkecil[1]) {
            terkecil[0] = i;
            terkecil[1] = aa[i];
        }
    }
    return terkecil;
}
console.log(cariTerkecil(arial));
console.log(susunNomor(arial));
