/*
====================================================
 Menseleksi DOM berdasarkan hubungan Parent - Child
====================================================
*/

// Menseleksi element <body>
var body = document.body;

// Mendapatkan element children dari <body>
var bodyChilds = body.children;

// Menampilkan DOM yang menjadi child dari <body> dalam bentuk array
console.log(bodyChilds); // h1, div id="contoh-div-1", div id="contoh-div-2", scripts js

var contohDiv1 = document.getElementById('contoh-div-1');

var contohDiv1Childs = contohDiv1.children;
// console.log(contohDiv1Childs)
var contohDiv1FirstChild = contohDiv1Childs[0];
console.log(contohDiv1FirstChild);

var contohDiv2 = document.getElementById('contoh-div-2');

var contohDiv2Childs = contohDiv2.children;

for (var n = 0; n < contohDiv2Childs.length; n++) {
    var contohDiv2NthChild = contohDiv2Childs[n];
    console.log(contohDiv2NthChild);
}

var contohP1 = document.getElementById('contoh-p-1');
console.log(contohP1);

var contohP1Parent = contohP1.parentNode;
console.log(contohP1Parent);