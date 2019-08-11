function dataHandling2(arr) {
    //splice
    arr.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
    console.log(arr);

    var date = arr[3].split("/"); //mengambil tanggal lahir dan meyimpannya dalam bentuk array 
                                  //dengan memisahkan antara tanggal, bulan, dan tahun 
    var month = '';
    switch (date[1]) {
        case '01': 
            month = 'Januari';
            break;
        case '02': 
            month = 'Februari';
            break;
        case '03': 
            month = 'Maret';
            break;
        case '04': 
            month = 'April';
            break;
        case '05': 
            month = 'Mei';
            break;
        case '06': 
            month = 'Juni';
            break;
        case '07': 
            month = 'Juli';
            break;
        case '08': 
            month = 'Agustus';
            break;
        case '09': 
            month = 'September';
            break;
        case '10': 
            month = 'Oktober';
            break;
        case '11': 
            month = 'November';
            break;
        case '12': 
            month = 'Desember';
            break;
    }
    console.log(month); //menampilkan bulan

    var sortedDate = date.sort(function(a,b) {return b - a} ); // mengurutkan array tanggal secara descending
    console.log(sortedDate); 

    date = arr[3].split("/");
    var joinedDate = date.join('-'); // menggabungkan array tanggal menjadi satu string. Dipisah dengan - antara
                                     // tanggal, bulan, dan tahun
    console.log(joinedDate);

    var nama = arr[1];
    var maksNama = nama.slice(0, 15); // memotong nama menjadi maksimal sampai 15 karakter
    console.log(maksNama);
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

dataHandling2(input);
