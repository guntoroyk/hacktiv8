/*
=======================
INVENTARIS KERAN MASJID
=======================

[INSTRUCTION]
Terdapat function inventarisKeran yang menerima 1 parameter berupa string , 
string input menggambar kondisi keran masjid
keran yang berjalan dengan baik dilambangkan dengan symbol ^,
keran yang rusak dilambangkan dengan ?,
symbol X melambangkan dinding pemisah keran wudhu

[EXAMPLES]
input: 'XX^XX^XX^XX?XX^XX'
output : 
'terdapat 4 keran yang berjalan nomor(1, 2, 3, 5) , dan 1 keran rusak nomor(4)'

input: 'XX?XX?XX^XX'
output: 
'terdapat 1 keran yang berjalan nomor(3), dan 2 keran rusak nomor(1,2)'

input : 'XX^XX^XX'
output :
'Semua keran berjalan dengan baik'

input : 'XX?XX?XX'
output :
'Semua keran rusak'

[RULES]
- WAJIB MENGGUNAKAN PSEUDOCODE !
- dilarang menggunakan splice, slice, split, substring, substr

// YOUR PSEUDOCODE/ALGORITHM HERE

*/

function inventarisKeran(str){
    var berjalan = 0,
    rusak = 0,
    nomorBerjalan = [],
    nomorRusak = [],
    keranNomor = 0;

    for (i = 0; i < str.length; i++){
        if (str[i] == '^') {
        berjalan++;
        keranNomor++;
        nomorBerjalan.push(keranNomor);
        } else if (str[i] == '?') {
            rusak++;
            keranNomor++;
            nomorRusak.push(keranNomor);
        }
    }
    
    if (rusak == 0) {
        return 'Semua keran berjalan dengan baik';
    } else if (berjalan == 0) {
        return 'Semua keran rusak';
    }   
    
    var result = 'terdapat ' + berjalan + ' keran yang berjalan nomor(' + nomorBerjalan + ') , dan ' + rusak + ' keran rusak nomor(' + nomorRusak + ')';
    return result;
}

console.log(inventarisKeran('XX^XX^XX^XX?XX^XX'));
// terdapat 4 keran yang berjalan nomor(1, 2, 3, 5) , dan 1 keran rusak nomor(4)
console.log(inventarisKeran('XX?XX?XX^XX'))
// terdapat 1 keran yang berjalan nomor(3), dan 2 keran rusak nomor(1,2)
console.log(inventarisKeran('XX^XX^XX'));
// Semua keran berjalan dengan baik
console.log(inventarisKeran('XX?XX?XX'));
// Semua keran rusak
