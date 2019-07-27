/**
  Hapus Simbol Rekursif

  Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa
  string. Function akan me-return string yang telah bersih dari berbagai simbol,
  hanya menyisakan a-z dan angka 0-9.

  RULES:
  - Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function hapusSimbolRec
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function hapusSimbolRec
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX

**/

function hapusSimbolRec(str) {
  var simbol = '~!@#$%^&*()_+-=` '
  let result = "";
  // for (let i = 0; i < str.length; i++) {
  //   let exist = false;
  //   for (let j = 0; j < simbol.length; j++) {
  //     if (str[i] === simbol[j]) exist = true;
  //   }

  //   if (!exist) result+= str[i];
  // }
  // return result
  let exist = false;
  for (let i = 0; i < simbol.length; i++) {
    if (str[0] === simbol[i]) {
      exist = true;
      break;
    }
  }

  if (str.length === 0) return "";
  
  let tempStr = str[0]
  if (exist) tempStr = "";
  return tempStr + hapusSimbolRec(str.slice(1));
}

/**
 * test%$4aa
 * 
 * t + hapus(est%$4aa)
 * t + e + hapus(st%$4aa)
 * t + e + s + hapus(t%$4aa)
 * t + e + s + t + hapus(%$4aa)
 * t + e + s + t + '' + hapus($4aa)
 * t + e + s + t + '' + '' + hapus(4aa)
 * t + e + s + t + '' + '' + 4 + hapus(aa)
 * t + e + s + t + '' + '' + 4 + a + hapus(a)
 * t + e + s + t + '' + '' + 4 + 1 + a + hapus('')
 * t + e + s + t + '' + '' + 4 + 1 + a + ''
 * 
 * 
 */


console.log(hapusSimbolRec('test%$4aa')); // test4aa
console.log(hapusSimbolRec('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbolRec('ma@#k!an~')); // makan
console.log(hapusSimbolRec('coding')); // coding
console.log(hapusSimbolRec('1+3-5*2=100')); // 1352100
