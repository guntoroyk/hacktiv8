/* 
=================
StandBackTriangel
=================

Standback Triangel adalah program untuk mengegenerate Segitiga yang ujungnya mengarah ke kanan.
dengan character huruf 'o' sebagai sisi nya 

[INSTRUCTION]
diberikan input berupa width , yaitu lebar segitiga. 

[Example]
jika width = 3 maka : 

123 <-- width 
  o
 oo
o o
 oo
  o

[RULE]
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()


*/

// function standBackTriangel(width) {
//   let o = width - 1;
//   for (let i = 0; i < width; i++) {
//     let result = ""
//     for (let j = 0; j < width; j++) {
//       if (j !== o && j !== width - 1) {
//         result += " ";
//       } else {
//         result += "o";
//       }
//     }
//     o--;
//     console.log(result)
//   }

//   o = 1;
//   for (let i = 0; i < width - 1; i++) {
//     let result = "";
//     for (let j = 0; j < width; j++) {
//       if (j !== o && j !== width - 1) {
//         result += " ";
//       } else {
//         result += "o";
//       }
//     }
//     o++;
//     console.log(result)
//   }
 
// }


function standBackTriangel(width) {
  for (let i = 0; i < (width * 2) - 1; i++) {
    let result = "";
    for (let j = 0; j < width; j++) {
      if (j === width - 1) {
        result += "o";
      } else if (i + j === 4 || i - j === 4) {
        result += "o";
      }
      else {
        result += " "
      }
      
    }
    console.log(result);

  }
}
 
/** 012
 0  --o
 1  -oo
 2  o-o
 3  -oo
 4  --o

 */


 /*
----o 
---oo 
--o-o 
-o--o 
o---o

 */
// standBackTriangel( 3 )
 standBackTriangel( 5 )
 
 /*
 input:5
  
     o 
    oo 
   o o 
  o  o 
 o   o 
  o  o 
   o o 
    oo 
     o 
 
 input:3
 
   o 
  oo 
 o o 
  oo 
   o 
 
 
 */