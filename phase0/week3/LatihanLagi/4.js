function dataHandling2(input) {
    input.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
    console.log(input);
    
    let date = mySplit(input[3], "/");
    let month = date[1];
    
    switch (month) {
        case "01": console.log("Januari"); break;
        case "02": console.log("Februari"); break;
        case "03": console.log("Maret"); break;
        case "04": console.log("April"); break;
        case "05": console.log("Mei"); break;
        case "06": console.log("Juni"); break;
        case "07": console.log("Juli"); break;
        case "08": console.log("Agustus"); break;
        case "09": console.log("September"); break;
        case "10": console.log("Oktober"); break;
        case "11": console.log("November"); break;
        case "12": console.log("Desember"); break;
    }

    date.sort(function(a, b) {
        return b - a;
    });

    // for (let i = 0; i < date.length; i++) {
    //     date[i] = Number(date[i])
    // }

    // console.log(date);
    
    // date = sortDescending(date);
    // console.log(date);
    
    // for (let i = 0; i < date.length; i++) {
    //     date[i] = String(date[i])
    // }
    console.log(date);
    
    date = mySplit(input[3], "/");
    console.log(myJoin(date, "-"))

    
    console.log(input[1].slice(0, 15));
}


function mySplit(input, delimiter= " ") {
    let result = [];
    let chr = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== delimiter) {
            chr += input[i];
        } else {
            result.push(chr)
            chr = "";
        }
    }
    result.push(chr)
    return result;
}

function sortDescending(input) {
    let result = [];
    while(input.length > 0) {
        let biggest = [0, input[0]];
        for (let i = 1; i < input.length; i++) {
            if (input[i] > biggest[1]) {
                biggest[0] = i;
                biggest[1] = input[i];
            }
        }
        result.push(biggest[1]);
        input = throwAway(input, biggest[0]);
    }
    return result;
}

function throwAway(input, index) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (i !== index) {
            result.push(input[i]);
        }
    }
    return result;
}
// console.log(sortDescending([4, 2, 9 , 10, 3, 2]));

function myJoin(input, separator = "") {
    let result = "";
    for (let i = 0; i < input.length; i++) {
        result += input[i];
        if (i != input.length - 1) {
            result += separator;
        }
    }
    return result;
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

// console.log("1" > "05");

// console.log(mySplit("21/05/1989", "/"))