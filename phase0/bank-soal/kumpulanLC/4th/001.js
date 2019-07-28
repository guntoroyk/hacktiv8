/**

Drone Position
==============

Implementasikan function dronePosition untuk mencari koordinat drone yang
ada di dalam `grid`. Drone akan direpresentasikan sebagai karakter '*'.

Format koordinat: <baris>, <kolom>

# Asumsi:
- Drone ('*') selalu berjumlah 1, tidak mungkin ada drone lain

Contoh input ada di test case.

# Aturan coding:
- WAJIB menyertakan algoritma / pseudocode

*/
/**
 * ALGORITMA
 * 1. Lakukan perulangan untuk mengecek baris-baris pada array grid. Setiap iteration menunjukkan indeks baris.
 * 2. Lakukan perulangan lagi untuk mengecek elemen-elemen pada setiap baris. Setiap iteration di sini menunjukkan indeks kolom.
 * 3. Ketika ditemukan * maka masukkan indeks baris dan kolom ke variabel result
 * 4. Kembalikan nilai dari variabel result.
 */

function dronePosition (grid) {
  // Code here
  let result = "";
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] === "*") result = i + ", " + j;
    }
  }
  if (result === "") return "No Drone";
  return result;
}

console.log(dronePosition([
  ['', '', ''],
  ['', '', ''],
  ['', '', '*']
])); // 2, 2

console.log(dronePosition([
  ['', '', ''],
  ['', '*', ''],
  ['', '', '']
])); // 1, 1

console.log(dronePosition([
  ['', '', '*'],
  ['', '', ''],
  ['', '', '']
])); // 0, 2

console.log(dronePosition([
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
])); // No drone
