/*
  ////////////
  Tiket Konser
  ////////////

  Buatlah suatu algoritma untuk pembelian tiket konser.

  [INSTRUCTIONS]
    1. Peserta konser akan membeli berdasarkan uang yang dia miliki, dan asumsi
       akan memilih harga yang paling mahal.
    2. Apabila peserta konser memiliki uang yang lebih rendah dari tiket konser,
       maka dia akan pulang ke rumah.
    3. Harga jenis kursi konser, antara lain:
      - VVIP 1000000
      - VIP  700000
      - Reguler 300000
    4. Apabila membeli tiket, tampilkan dalam format [nama]-[jenis kursi] dan [kembalian]

  [RULES]
    1. Hanya tulis Algoritma saja
*/

// type here

/* 
  1. Simpan nama peserta konser ke dalam variabel namaSaya.
  2. Simpan uang yang dimiliki ke dalam variabel uangSaya.
  3. Jika uangSaya lebih besar atau sama dengan tiket VVIP yaitu 1000000, maka lanjut ke step 6. Jika tidak, maka lanjut ke step 4.
  4. Jika uangSaya lebih besar atau sama dengan tiket VIP yaitu 700000, maka lanjut ke step 7. Jika tidak, maka lanjut ke step 5.
  5. Jika uangSaya lebih besar atau sama dengan tiket Reguler yaitu 300000, maka lanjut ke step 8. jika tidak, maka lanjut ke step 10.
  6. Beli tiket VVIP, simpan variabel jenisKursi dengan nilai VVIP. Hitung uang kembalian dengan mengurangi uangSaya dengan 1000000. Simpan hasilnya ke variabel kembalianSaya.
  7. Beli tiket VIP, simpan variabel jenisKursi dengan nilai VIP. Hitung uang kembalian dengan mengurangi uangSaya dengan 700000. Simpan hasilnya ke variabel kembalianSaya.
  8. Beli tiket Reguler, simpan variabel jenisKursi dengan nilai Reguler. Hitung uang kembalian dengan mengurangi uangSaya dengan 300000. Simpan hasilnya ke variabel kembalianSaya.
  9. Tampilkan nilai dari namaSaya - jenisKursi - kembalianSaya
  10. Pulang ke rumah.
*/
