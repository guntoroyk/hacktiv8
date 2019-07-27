/**
Even Pairs Sum
--------------
Implementasikan function `evenPairsSum` yang akan menjumlahkan pasangan-pasangan angka genap yang
ada di dalam `str`.
Contoh
- input: '34102180'
  pasangan: 34, 10, 21, 80
  output: 124
  Karena ada pasangan genap (34, 10, 80) maka akan dijumlahkan
- input: '31913791'
  pasangan: 31, 91, 37, 91
  output: 0
  Karena tidak ada pasangan genap
- input: '2130113'
  pasangan: 21, 30, 11, 32
  output: 62
  Karena ada pasangan genap (30, 32) maka akan dijumlahkan
NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir
RULES:
 - WAJIB MENGGUNAKAN algoritma/pseudocode, tidak menyertakan algoritma/pseudocode maka codingan dianggap tidak valid
*/


function evenPairsSum (str) {
    if (str.length%2!==0){
      str += str[0]
    } 
    pair = []
    var string = ''
    counter = 0
      for (i=0; i<str.length; i++){
          string+=str[i]   
          counter++ 
        if (counter%2==0){
            pair.push(string)
            string = ''
        }   
        }
    var sum = 0
    for (let i=0; i<pair.length; i++){
      if (Number(pair[i])%2==0){
        sum +=Number(pair[i])
      }
    }
    return sum
    }
    
    
    console.log(evenPairsSum('2044101211')); // 86
    console.log(evenPairsSum('33791363')); // 0
    console.log(evenPairsSum('23426766201')); // 140
    console.log(evenPairsSum('2478201')); // 134