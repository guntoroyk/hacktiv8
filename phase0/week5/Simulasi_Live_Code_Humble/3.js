/*
  /////////////////////
  2ND WINNER GUILD WARS
  /////////////////////

  Function Guild Wars akan menentukkan juara ke-2 dalam bentuk string, dari peringkat 1 ke 4.
  Jumlah peserta selalu array dengan length 4.  

  EXAMPLE
  INPUT: ['OOOO', 'ooOO', 'o', 'OOo']
  INFO:
  - O dihitung 2 
  - o dihitung 1
  GUIDE: 
  - Awal Sisi Kiri: (Tim 1 vs Tim 2) dan Sisi Kanan: (Tim 3 vs Tim 4)
  - Pemenang dari Sisi Kiri vs pemenang dari Sisi Kanan menghasilkan juara 1 dan 2
  - Yang kalah dari Sisi Kiri vs yang kalah dari Sisi Kanan menghasilkan juara 3 dan 4
  PROCESS:
  - Sisi Kiri => OOOO vs ooOO => OOOO (win), ooOO (lose)
  - Sisi Kanan => o vs OOo => o (lose), OOo (win)
  - Winner vs Winner => OOOO vs OOo => OOOO (1), OOo (2)
  - Loser vs Loser => ooOO vs o => ooOO(3), o (4)
  - Urutan pemenang [OOOO, OOo, ooOO, o]
  OUTPUT:
  Juara Ke-2 adalah tim OOo

  RULES:
  1. Jumlah yang bertanding selalu 4 tim
  2. Asumsi total kekuatan di setiap tim tidak ada yang sama
*/

function guildWars(guilds) {
  // code here
 let result = [];
  
  let a = guilds[0];
  let b = guilds[1]
  let c = guilds[2]
  let d = guilds[3]

  // console.log(a)

  let poinA = hitungPoin(a);
  let poinB = hitungPoin(b);
  let poinC = hitungPoin(c);
  let poinD = hitungPoin(d);

  let pemenangKiri = {
    nama: "",
    poin: 0
  }
  let pemenangKanan = {
    nama: "",
    poin: 0
  }
  let keduaKiri = {
    nama: "",
    poin: 0
  }
  let keduaKanan = {
    nama: "",
    poin: 0
  }

  // console.log(poinC)
  if (poinA > poinB) {
    pemenangKiri.nama = a;
    pemenangKiri.poin = poinA;
    keduaKiri.nama = b;
    keduaKiri.poin = poinB
    guilds[0] = a;
    guilds[1] = b;
  } else if (poinB > poinA) {
    pemenangKiri.nama = b;
    pemenangKiri.poin = poinB;
    keduaKiri.nama = a;
    keduaKiri.poin = poinA;
    guilds[0] = b;
    guilds[1] = a;
  }

  if (poinC > poinD) {
    pemenangKanan.nama = c;
    pemenangKanan.poin = poinC;
    keduaKanan.nama = d;
    keduaKanan.poin = poinD;
    guilds[2] = c;
    guilds[3] = d;
  } else if (poinD > poinC) {   
    pemenangKanan.nama = d;
    pemenangKanan.poin = poinD;
    keduaKanan.nama = c;
    keduaKanan.poin = poinC;
    guilds[2] = d;
    guilds[3] = c;
  }

  if (pemenangKanan.poin> pemenangKiri.poin) {
    guilds[0] = pemenangKanan.nama;
    guilds[1] = pemenangKiri.nama;
  } else {
    guilds[0] = pemenangKiri.nama;
    guilds[1] = pemenangKanan.nama;
  }
 

  if (keduaKanan.poin > keduaKiri.poin) {
    guilds[2] = keduaKanan.nama;
    guilds[3] = keduaKiri.nama
  } else {
    guilds[2] = keduaKiri.nama;
    guilds[3] = keduaKanan.nama;
  }



    // console.log(kiri)
  // console.log(guilds)
  // return guilds;
  return "Juara ke-2 adalah tim " + guilds[1];

}

function hitungPoin(input) {
  let poin = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "O") poin += 2; 
    else poin += 1;
  }
  return poin;
}

// console.log(hitungPoin('o'))
// console.log(hitungPoin('OOo'))

console.log(guildWars(['OOOO', 'ooOO', 'o', 'OOo']))
// Juara ke-2 adalah tim OOo
console.log(guildWars(['OO', 'OOO', 'ooOOO', 'OOOo']))
// // Juara ke-2 adalah tim OOO
console.log(guildWars(['ooo', 'oooo', 'oo', 'o']))
// Juara ke-2 adalah tim oo