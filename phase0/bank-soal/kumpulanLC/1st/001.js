/**
Buatlah sebuah algoritma untuk kasus berikut:
Seorang pengajar sedang memeriksa ujian mahasiswa dan akan memberikan desc nilai dari A-E dengan ketentuan sebagai berikut:
 - Nilai 80 - 100: A
 - Nilai 65 - 79: B
 - Nilai 50 - 64: C
 - Nilai 35 - 49: D
 - Nilai 0 - 34: E

 Tampilkan desc nilai dan nama siswa saat pengajar tersebut memasukkan nilai dan nama yang dia inginkan.

NOTED:
Jika nilai mahasiswa kurang dari 0 atau lebih dari 100 maka tampilkan 'Nilai Invalid'
**/

/**
 * ALGORITMA
 * 1. Simpan variabel nama dengan sembarang nama mahasiswa
 * 2. Simpan variabel nilai dengan sembarang bilangan
 * 3. Jika nilai kurang dari 0 atau lebih dari 100 maka tampilkan 'Nilai Invalid'
 * 4. Jika nilai kurang dari atau sama dengan 34 maka set variabel nilaiHuruf dengan 'E'
 * 5. Jika nilai kurang dari atau sama dengan 49 maka set variabel nilaiHuruf dengan 'D'
 * 6. Jika nilai kurang dari atau sama dengan 64 maka set variabel nilaiHuruf dengan 'C'
 * 7. Jika nilai kurang dari atau sama dengan 79 maka set variabel nilaiHuruf dengan 'B'
 * 8. Jika nilai kurang dari atau sama dengan 100 maka set variabel nilaiHuruf dengan 'A'
 */

 function cekNilai(nama, nilai) {

     if (nilai < 0 || nilai > 100) return "Nilai Invalid";
     if (nilai <= 34) return "E";
     if (nilai <= 49) return "D";
     if (nilai <= 64) return "C";
     if (nilai <= 79) return "B";
     if (nilai <= 100) return "A";
 }

 console.log(cekNilai("igun", 90))
 console.log(cekNilai("igun", 70))
 console.log(cekNilai("igun", 34))