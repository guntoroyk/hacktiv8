function bubbleSort(arr) {
    let sorted = false;
    
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                sorted = false;
            }         
        }
    }
    return arr;
}

// function bubbleSort(arr) {
//     var temp;

//     // do loop, for every data in array
//     for (var i = 0; i < arr.length; i++) {
//       // do loop, to compare data to other data in array
//     //   console.log("array i: " + arr[i])
//       for (var j = 0; j < arr.length; j++) {
//         // bandingkan nilai data ke i, terhadap semua data di array
//         // jika data ke i > dari data lain, swip data, shg data ke i di depan
//         // jika data ke i < dari data lain, swip data, shg data ke i di belakang
//         // ubah tanda > atau < untuk asc atau dcs
//         // console.log("array j: " + arr[j])
//         if (arr[i] > arr[j]) {
//           temp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = temp;
//         }
//         console.log(arr)
//       }
//     }

//     return arr;
//   }
//   console.log(sort(["cacing", "ayam", "kuda", "anoa", "kancil"]));
var a = ["cacing", "ayam", "kuda", "anoa", "kancil"];

console.log(bubbleSort(a));
/*
i = 0
cacing, kuda, ayam
swapped = true

i = 1
cacing, ayam, kuda // swap
swapped = false

i = 2
cacing, ayam, kuda 
swapped = false


i = 0
ayam, cacing, kuda // swap
swapped = false


i = 1
ayam, cacing, kuda
swapped = false



*/





// let swapped = false;
//     while (swapped === false) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i+1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i+1];
//                 arr[i+1] = temp;
//             }
//         }
//         swapped = true;
//     }