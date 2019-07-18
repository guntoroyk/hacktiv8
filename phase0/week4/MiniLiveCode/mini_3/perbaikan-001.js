/*
============
PAIR PROJECT 
============

[INSTRUCTION]
saat nya phase 0 mengerjakan project secara pair ( berpasangan / berdua ). 
dalam pembagian kelompok student, ada kriteria yang harus dipenuhi yaitu 
setiap kelompok yang dipasangkan harus memiliki huruf depan ( inisial ) yang 
BERBEDA. 

pada kelas ini , jumlahnya selalu genap dan murid yang memiliki inisial yang sama 
tidak lebih dari 2 orang

ketentuan : 
- jika murid berjumlah ganjil output : "Jumlah murid harus genap"
- tambahkan test case lain bila diperlukan 

[Example]
input : ["asep","baqi","jajang","junaedi","iqbal","toni"]
output : ["asep and baqi","jajang and iqbal","junaedi and toni"]

[RULE]
- dilarang menggunakan build in function array apapun kecuali push() 
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()

*/

function pairProject( students ) {
  // your code here 
  let result = [];
  if (students.length % 2 === 0) {
      while (students.length > 1) {
          let pasangan = students[0];
          for (let i = 1; i < students.length; i++) {
              if (students[i][0] !== pasangan[0]) {
                  pasangan += " and " + students[i]; 
                  students = mySlice(students, 0, i);
                  break;
              }
          }
          result.push(pasangan);
      }
      return result;
  } else {
      return "Jumlah murid harus genap";
  }
}

function mySlice(arr, a, b) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
      if (i !== a && i !== b) {
          result.push(arr[i]);
      }
  }
  return result;
}

// console.log(mySlice(["asep","baqi","jajang","junaedi","iqbal","toni"], 2))

console.log( pairProject(["asep","baqi","jajang","junaedi","iqbal","toni"]) )
/* 
["asep and baqi","jajang and iqbal","junaedi and toni"]
*/

console.log( pairProject(["Aries","Awtian","Momotaro","Yoki","Icha","Wika","Wawan","Mimin","Ryan","Yogi"]) )
/* 
[ 'Aries and Momotaro',
'Awtian and Yoki',
'Icha and Wika',
'Wawan and Mimin',
'Ryan and Yogi' ]
*/