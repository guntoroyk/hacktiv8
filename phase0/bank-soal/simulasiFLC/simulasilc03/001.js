/* Encrypt me
    Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
    kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)

  Berikut adalah kamus huruf dari HBI
  huruf biasa abcdefghijklmnopqrstuvwxyz
  huruf H8BI  !@#$%^&*()-+1234567890[]{}

  Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!

  Note:
  - Selain karakter huruf biasa maka tidak akan di-translate

  Contoh 1:
  encrypt(dimitri) akan menghasilkan => $(1(86(

  Contoh 2:
  encrypt(@wtian) akan menghasilkan => @[8(!2

  Selamat berjuang, agen rahasia..

  RULES:
  ------
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf !

  PSEUDOCODE

  STORE biasa with string a to z
  STORE h8bi with string '!@#$%^&*()-+1234567890[]{}'
  STORE result with empty string 
  STORE i with 0
  WHILE i less than length of input
    STORE j with 0
    WHILE j less than length of biasa
      IF value of input in i same with value of biasa in j THEN
        SET result with result plus by value of h8bi in j
        BREAK
      END IF
    END WHILE
  END WHILE
  RETURN result

*/
function encrypt(input) {
  // your code here
  let biasa = "abcdefghijklmnopqrstuvwxyz";
  let h8bi = "!@#$%^&*()-+1234567890[]{}";

  let result = "";
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < biasa.length; j++) {
      if (input[i] === biasa[j]) {
        result += h8bi[j];
        break;
      }
    }
  }
  return result;
  
}

console.log(encrypt('dimitri')) // $(1(86(
console.log(encrypt('irsyah mardiah')) //(67{!* 1!6$(!*
console.log(encrypt('dimitr€€')) // $(1(86€€
console.log(encrypt('d!mas')) // $!1!7
console.log(encrypt('@wtian')) // @[8(!2
