function digitPerkalianMinimum(angka) {
  let faktor = [];
  let terpendek = 0;

  for (let i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      if (i !== faktor[1]) {
        faktor.push([i, angka/i]);
      }
    }
  }
  
  for (let i = 0; i < faktor.length; i++) {
    let faktorDigabung = myJoin(faktor[i]);
    
    if (i === 0) {
      terpendek = faktorDigabung.length;
    } else {
      if (faktorDigabung.length < terpendek) {
        terpendek = faktorDigabung.length;
      }
    }
  }
  return terpendek;
}

function myJoin(input) {
  let result = "";
  
  for (let i = 0; i < input.length; i++) {
    result += input[i];
  }
  return result;
}


// console.log(myJoin([1,3,2]));
// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2

/**
* 20
* 1 20
* 2 10
* 4 5
* 
*/