//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]


function dataHandling(arrStr) {
    let result = "";
    
    for (let i = 0; i < arrStr.length; i++) {
        let id = "Nomor ID: " + arrStr[i][0];
        let name = "Nama Lengkap: " + arrStr[i][1];
        let ttl = "TTL: " + arrStr[i][2] + " " + arrStr[i][3];
        let hobby = "Hobi: " + arrStr[i][4];
        result += id + "\n" + name + "\n" + ttl + "\n" + hobby+ "\n\n"         
    }
    return result;
}

console.log(dataHandling(input));