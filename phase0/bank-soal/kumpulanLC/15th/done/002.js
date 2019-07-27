/**
---------------------
First Letter Grouping
---------------------
Buatlah sebuah fungsi yang menerima input nama dan akan mereturn atau mengembalikan
nilai group manakah nama tersebut, dengan aturan sebagai berikut:
- Jika huruf pertama dari `name` adalah a, b, c, d maka akan mengembalikan nilai 'Masuk group pertama'
- Jika huruf pertama dari `name` adalah e, f, g, h maka akan mengembalikan nilai 'Masuk group kedua'
- Selain itu akan mengembalikan nilai 'Masuk group terakhir'
Contoh:
- `name` = 'dimitri', output: 'Masuk group pertama'
- `name` = 'icha', output: 'Masuk group terakhir'
- `name` = 'taufik', output: 'Masuk group terakhir'
- `name` = 'sergei', output: 'Masuk group terakhir'
- `name` = 'foobar', output: 'Masuk group kedua'
*/


// Code disini
function firstLetterGrouping(name) {
    var group1 = ['a','b','c','d']
    var group2 = ['e','f','g','h']
for (let i=0; i<group1.length; i++){
    if (name[0].toLowerCase()===group1[i]){
        return 'Masuk group pertama'
    }  
}
for (let i=0; i<group2.length; i++){
     if (name[0].toLowerCase()===group2[i]){
        return 'Masuk group kedua'
}
}
return 'Masuk group terakhir'
}

console.log(firstLetterGrouping('rama')) // Masuk group terakhir
console.log(firstLetterGrouping('awtian')) // Masuk group pertama
console.log(firstLetterGrouping('foobar')) // Masuk group kedua
