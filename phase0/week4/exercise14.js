function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    let result = [];

    for (let i = 0; i < arrPenumpang.length; i++) {
        
        let namaPenumpang = arrPenumpang[i][0];
        let naikDari = arrPenumpang[i][1];
        let tujuan = arrPenumpang[i][2];
        let indexNaik = 0;
        let indexTujuan = 0;
        let bayar = 0;

        for (let j = 0; j < rute.length; j++) {
            if (rute[j] === naikDari) {
                indexNaik = j;
            } else if (rute[j] === tujuan) {
                indexTujuan = j;
            }
        }

        bayar = (indexTujuan - indexNaik) * 2000;

        let penumpang = {
            penumpang: namaPenumpang,
            naikDari: naikDari,
            tujuan: tujuan,
            bayar: bayar
        };

        result.push(penumpang);
    }
    return result;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]