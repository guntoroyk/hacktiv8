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
// Nilai tidak valid (0) jika logic dan PSEUDOCODE berbeda!
// Tidak harus formal pseudocode, tapi paling tidak jelaskan step by step logikanya
*/

function tugOfWar(sentence){
  var result = [];
  var count = 0;
  var newSplit = sentence.split('--V--');
  
  for(var i = 0 ; i < newSplit.length ; i++){
    // console.log(newSplit[i])
    if(newSplit[i] === 'A'){
      result.push(count);
    } else if(newSplit[i] === 'B'){
      result.push('2');
    } else if(newSplit[i] === 'C'){
      result.push('3')
    }
  }
  return result
}

console.log(tugOfWar('ABCA--V--ABCC')); // "Team KANAN Menang!"
// console.log(tugOfWar('CC--V--AAAA')); // "Team Kiri Menang!"
// console.log(tugOfWar('BBBB--V--CCC')); // "Team KANAN Menang!"
// console.log(tugOfWar('AAAA--V--CA')); // 'DRAW'
// console.log(tugOfWar('--V--')); // 'NO PLAYERS'