function ubahHuruf(kata) {
    // you can only write your code here!
    let alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = "";

    for (let i = 0; i < kata.length; i++) {
      let huruf = kata[i];
      let indexHuruf = 0;

      for (let j = 0; j < alfabet.length; j++) {
        if (huruf === alfabet[j]) {
          indexHuruf = j;
        }
      }

      indexHuruf++;
      result += alfabet[indexHuruf];
    }
    return result;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu