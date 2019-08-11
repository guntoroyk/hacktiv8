
/* Membuat Format Tanggal */

var tanggal = 31; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 02; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2021; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch(bulan) {
    case 1: {
        switch(tahun >= 1900 && tahun <= 2200) { // validasi tahun 1900 - 2200
            case true:
                switch(tanggal >= 1 && tanggal <= 31) { // return true
                    case true: 
                        console.log(tanggal + ' Januari ' + tahun);
                        break;
                    default:
                        console.log('Tanggal di Januari antara 1-31');
                        break;
                }
                break;
            default:
                console.log('Masukkan tahun antara 1900 sampai 2200');
                break;
        }
        break;
    }
    case 2: {
       switch(tahun >= 1900 && tahun <= 2200) {
            case true:
                // pengecekan apakah tahun kabisat?
                switch((tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 4 === 0 && tahun % 100 === 0 && tahun % 400 === 0)) {
                    case true:
                        console.log(tahun + ' adalah tahun kabisat');
                        switch(tanggal >= 1 && tanggal <= 29) { // return true
                            case true: 
                                console.log(tanggal + ' Februari ' + tahun);
                                break;
                            default:
                                console.log('Masukkan tanggal di tahun Kabisat antara 1-29');
                                break;
                        }
                        break;
                    default:
                        switch(tanggal >= 1 && tanggal <= 28) { // return true
                            case true: 
                                console.log(tanggal + ' Februari ' + tahun);
                                break;
                            default:
                                console.log('Tanggal di Februari antara 1-28');
                                break;
                        }
                        break;
                }
                break;
            default:
                console.log('Tahun antara 1900 sampai 2200');
                break;
       }
       break;
    }
    case 3: {
        switch(tahun >= 1900 && tahun <= 2200) { // validasi tahun 1900 - 2200
            case true:
                switch(tanggal >= 1 && tanggal <= 31) { // return true
                    case true: 
                        console.log(tanggal + ' Maret ' + tahun);
                        break;
                    default:
                        console.log('Tanggal di Maret antara 1-31');
                        break;
                }
                break;
            default:
                console.log('Masukkan tahun antara 1900 sampai 2200');
                break;
        }
        break;
    }
    case 4: {
        switch(tahun >= 1900 && tahun <= 2200) { // validasi tahun 1900 - 2200
            case true:
                switch(tanggal >= 1 && tanggal <= 30) { // return true
                    case true: 
                        console.log(tanggal + ' April ' + tahun);
                        break;
                    default:
                        console.log('Tanggal di April antara 1-30');
                        break;
                }
                break;
            default:
                console.log('Masukkan tahun antara 1900 sampai 2200');
                break;
        }
        break;
    }
    case 5: {
        switch(tahun >= 1900 && tahun <= 2200) { // validasi tahun 1900 - 2200
            case true:
                switch(tanggal >= 1 && tanggal <= 31) { // return true
                    case true: 
                        console.log(tanggal + ' Mei ' + tahun);
                        break;
                    default:
                        console.log('Tanggal di Mei antara 1-31');
                        break;
                }
                break;
            default:
                console.log('Masukkan tahun antara 1900 sampai 2200');
                break;
        }
        break;
    }
    case 6: {
        switch(tahun >= 1900 && tahun <= 2200) { // validasi tahun 1900 - 2200
            case true:
                switch(tanggal >= 1 && tanggal <= 30) { // return true
                    case true: 
                        console.log(tanggal + ' Juni ' + tahun);
                        break;
                    default:
                        console.log('Tanggal di Juni antara 1-30');
                        break;
                }
                break;
            default:
                console.log('Masukkan tahun antara 1900 sampai 2200');
                break;
        }
        break;
    }
    case 7: {
        switch(tahun >= 1900 && tahun <= 2200) { // validasi tahun 1900 - 2200
            case true:
                switch(tanggal >= 1 && tanggal <= 31) { // return true
                    case true: 
                        console.log(tanggal + ' Juli ' + tahun);
                        break;
                    default:
                        console.log('Tanggal di Juli antara 1-31');
                        break;
                }
                break;
            default:
                console.log('Masukkan tahun antara 1900 sampai 2200');
                break;
        }
        break;
    }
    case 8: {
        switch(tahun >= 1900 && tahun <= 2200) { // validasi tahun 1900 - 2200
            case true:
                switch(tanggal >= 1 && tanggal <= 31) { // return true
                    case true: 
                        console.log(tanggal + ' Agustus ' + tahun);
                        break;
                    default:
                        console.log('Tanggal di Agustus antara 1-31');
                        break;
                }
                break;
            default:
                console.log('Masukkan tahun antara 1900 sampai 2200');
                break;
        }
        break;
    }
    case 9: {
        switch(tahun >= 1900 && tahun <= 2200) { // validasi tahun 1900 - 2200
            case true:
                switch(tanggal >= 1 && tanggal <= 30) { // return true
                    case true: 
                        console.log(tanggal + ' September ' + tahun);
                        break;
                    default:
                        console.log('Tanggal di September antara 1-30');
                        break;
                }
                break;
            default:
                console.log('Masukkan tahun antara 1900 sampai 2200');
                break;
        }
        break;
    }
    case 10: {
        switch(tahun >= 1900 && tahun <= 2200) { // validasi tahun 1900 - 2200
            case true:
                switch(tanggal >= 1 && tanggal <= 31) { // return true
                    case true: 
                        console.log(tanggal + ' Oktober ' + tahun);
                        break;
                    default:
                        console.log('Tanggal di Oktober antara 1-31');
                        break;
                }
                break;
            default:
                console.log('Masukkan tahun antara 1900 sampai 2200');
                break;
        }
        break;
    }
    case 11: {
        switch(tahun >= 1900 && tahun <= 2200) { // validasi tahun 1900 - 2200
            case true:
                switch(tanggal >= 1 && tanggal <= 30) { // return true
                    case true: 
                        console.log(tanggal + ' November ' + tahun);
                        break;
                    default:
                        console.log('Tanggal di November antara 1-31');
                        break;
                }
                break;
            default:
                console.log('Masukkan tahun antara 1900 sampai 2200');
                break;
        }
        break;
    }
    case 12: {
        switch(tahun >= 1900 && tahun <= 2200) { // validasi tahun 1900 - 2200
            case true:
                switch(tanggal >= 1 && tanggal <= 31) { // return true
                    case true: 
                        console.log(tanggal + ' Desember ' + tahun);
                        break;
                    default:
                        console.log('Tanggal di Desember antara 1-31');
                        break;
                }
                break;
            default:
                console.log('Masukkan tahun antara 1900 sampai 2200');
                break;
        }
        break;
    }
    default: {console.log('Setahun cuma ada 12 bulan men!')}
}

// switch(tanggal >= 1 && tanggal <= 31) { // return true
//     case true: 
//         console.log('Benar');
//         break;
//     default:
//         console.log('Salah');
//         break;
// }
