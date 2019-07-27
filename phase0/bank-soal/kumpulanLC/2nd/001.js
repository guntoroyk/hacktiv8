/**
Graduates Count
Implementasikan function graduatesCount untuk menampilkan berapa orang yang lulus berdasarkan
data nilai yang diberikan (`scores`) dengan aturan jika nilai lebih besar atau sama dengan 75
maka orang itu dinyatakan lulus.
Contoh:
- input: [70, 85, 65, 90]
output: 2 orang lulus
- input: [0, 65, 30, 74]
output: Tidak ada yang lulus
- input: [90, 100, 76, 85]
output: Semua lulus
- input: []
output: Data kosong


ATURAN CODING:
--------------
- Wajib menuliskan pseudocode atau algoritma.
Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi
soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()

*/

function graduatesCount (scores) {
    // if (scores.length === 0) return 0;
    
    // //  if (scores.length === 1) return 1;
    // // console.log('a')
    // let tambah = 0;
    // if (scores[0] >= 75) {
    //     tambah = 1;
    // }
    // return tambah + graduatesCount(scores.slice(1));

    if (scores.length === 0) return "Data kosong";
    let count = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 75) count++;
    }
    if (count === 0) return "Tidak ada yang lulus";
    if (count === scores.length) return "Semua orang lulus";
    return count + " orang lulus"
}

// Test cases

console.log(graduatesCount([76, 77, 30, 80, 10, 20])); // 3 orang lulus
console.log(graduatesCount([100, 100, 74, 60, 87])); // 3 orang lulus
console.log(graduatesCount([90, 100, 85, 79, 80, 74])); // 5 orang lulus
console.log(graduatesCount([100, 100, 100, 85, 90])); // Semua orang lulus
console.log(graduatesCount([0, 0, 0, 0, 0])); // Tidak ada yang lulus
console.log(graduatesCount([])); // Data kosong
