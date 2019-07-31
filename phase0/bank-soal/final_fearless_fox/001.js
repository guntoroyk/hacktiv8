/*
=============
TUG OF WAR WINNER
=============
Name :_____________
[INSTRUCTIONS]
Tug of War adalah sebuah function yang menerima string sebagai tarik tambang antara 2 belah pihak
Kamu harus bisa menentukan pemenang dari permainan tarik tambang ini dengan cara mengukur kekuatan setiap pemain
Kekuatan pemain ada 3 Level 
- A = 1 
- B = 2
- C = 3

Sisi dengan kekuatan terbanyak akan menang dan jika kekuatannya sama maka hasilnya akan draw

[CONSTRAINTS]
Tidak ada batasan untuk soal ini.

[EXAMPLE]
tugOfWar('ABCA--V--ABCC')
Skor team kiri: 7
Skor team kanan: 9
output: Team KANAN Menang!

[Tulis PSEUDOCODE di bawah ini]
STORE sentence with input test case
SET teams with sentence splited by "--V--"

IF length of teams[0] is 0 or length of temas[1] is 0 THEN
  RETURN "NO PLAYERS"
END IF

STORE poinKiri with 0
STORE poinKanan with 0

STORE i with 0
WHILE i less than length of teams[0]
  IF teams[0][i] same with 'A' THEN
    SET poinKiri with poinKiri plus 1
  ELSE IF teams[0][i] same with 'B' THEN
    SET poinKiri with poinKiri plus 2
  ELSE IF teams[0][i] same with 'B' THEN
    SET poinKiri with poinKiri plus 3
  END IF
  CALCULATE i plus by 1
END WHILE

SET i with 0
WHILE i less than length of teams[1]
  IF teams[1][i] same with 'A' THEN
    SET poinKanan with poinKiri plus 1
  ELSE IF teams[1][i] same with 'B' THEN
    SET poinKanan with poinKiri plus 2
  ELSE IF teams[1][i] same with 'B' THEN
    SET poinKanan with poinKiri plus 3
  END IF
  CALCULATE i plus by 1
END WHILE

IF poinKiri same with poinKanan THEN
  RETURN 'DRAW'
ELSE IF poinKiri greater than poinKanan THEN
  RETURN 'Team KIRI Menang!'
ELSE 
  RETURN 'TEAM KANAN Menang!'
END IF

// Nilai tidak valid (0) jika logic dan PSEUDOCODE berbeda!
// Tidak harus formal pseudocode, tapi paling tidak jelaskan step by step logikanya
*/

function tugOfWar(sentence) {
  let teams = sentence.split("--V--");

  if (teams[0].length === 0 || teams[1].length === 0) return "NO PLAYERS";
  // console.log(teams);
  let poinKiri = 0;
  let poinKanan = 0;
  for (let i = 0; i < teams[0].length; i++) {
    switch (teams[0][i]) {
      case 'A':
      poinKiri += 1;
      break;
      case 'B':
      poinKiri += 2;
      break;
      case 'C':
      poinKiri += 3;
      break;
    }
  }
  
  for (let i = 0; i < teams[1].length; i++) {
    switch (teams[1][i]) {
      case 'A':
      poinKanan += 1;
      break;
      case 'B':
      poinKanan += 2;
      break;
      case 'C':
      poinKanan += 3;
      break;
    }
  }
  
  if (poinKiri === poinKanan) return 'DRAW';
  if (poinKiri > poinKanan) return "Team KIRI Menang!";
  if (poinKiri < poinKanan) return "Team KANAN Menang!";
}



console.log(tugOfWar('--V--C')); // "Team KANAN Menang!"
console.log(tugOfWar('CC--V--AAAA')); // "Team Kiri Menang!"
console.log(tugOfWar('BBBB--V--CCC')); // "Team KANAN Menang!"
console.log(tugOfWar('AAAA--V--CA')); // 'DRAW'
console.log(tugOfWar('--V--')); // 'NO PLAYERS