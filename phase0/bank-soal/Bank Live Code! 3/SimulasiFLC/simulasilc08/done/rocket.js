/*
**************
FASTEST CLIMBER
**************
Fastest climber adalah sebuah function yang menerima sebuah parameter berupa string.
Dimana pada string tersebut, terdapat nama nama pemanjat tebing, dan waktu nya dalam bentuk jam dan menit.
Function dibawah akan mereturn nama pemanjat tebing tercepat.
RULES:
 - DILARANG menggunakan REGEX
 - DILARANG menggunakan muilt in function .reduce(), .map(), .filter()
 - DILARANG menggunakan built in function .indexOf(), dan .include()
 - DILARANG menggunakan built in function .split()
*/
/* 
step
m= split koma
m= split spasi
m = split :


 */
function fastestClimber(string) {
  string += ",";
  var noKoma = [];
  var temp = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ",") {
      noKoma.push(temp + " ");
      temp = "";
    } else {
      temp += string[i];
    }
  }
  temp = "";
  var menit = [];

  var noSpasi = [];
  for (let i = 0; i < noKoma.length; i++) {
    noSpasi.push([]);
    menit.push([]);
    //jam.push([]);
    for (let j = 0; j < noKoma[i].length; j++) {
      if (noKoma[i][j] === " ") {
        noSpasi[i].push(temp);
        temp = "";
      } else {
        temp += noKoma[i][j];
      }
    }
  }
  var jam = [];
  var menit = [];
  temp = "";
  for (let i = 0; i < noSpasi.length; i++) {
    jam.push([]);
    menit.push([]);
    //   console.log(noSpasi[i])
    for (let k = 0; k < noSpasi[i][1].length - 3; k++) {
      jam[i].push(noSpasi[i][1][k]);
    }
    var arrmenit = [];
    for (let l = 0; l < noSpasi[i][2].length - 5; l++) {
      menit[i].push(noSpasi[i][2][l]);
    }
  }
  temp = "";
  var waktu = [];
  for (let i = 0; i < noSpasi.length; i++) {
    waktu.push([]);
    temp += jam[i];
    for (let j = 0; j < menit[i].length; j++) {
      temp += menit[i][j];
    }
    waktu[i].push(Number(temp));
    temp = "";
    for (let k = 0; k < noSpasi[i][0].length - 1; k++) {
      temp += noSpasi[i][0][k];
    }
    waktu[i].push(temp);
    temp = "";
  }
  for (let i = 0; i < waktu.length; i++) {
    for (let j = i + 1; j < waktu.length; j++) {
      if (waktu[i][0] > waktu[j][0]) {
        var urut = waktu[i];
        waktu[i] = waktu[j];
        waktu[j] = urut;
      }
    }
  }
  return waktu[0][1];
}

console.log(
  fastestClimber("Kyle: 1jam 30menit,Nein: 2jam 30menit,Light: 0jam 59menit")
); // Light
console.log(
  fastestClimber("Retsu: 1jam 30menit,Tokichi: 2jam 01menit,Go: 1jam 59menit")
); // Retsu
console.log(
  fastestClimber("Awtian: 1jam 01menit,Pipu: 1jam 11menit,Caca: 1jam 59menit")
); // Awtian
