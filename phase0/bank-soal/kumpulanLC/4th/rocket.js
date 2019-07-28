/**

Virus Percentage
================

Implementasikan function virusPercentage untuk menghitung
persentase virus yang ada. Hanya akan ada 4 tipe virus, yaitu:
- *
- #
- @
- $

# Contoh:
- `input` -> **##@
output -> 40% *, 40% #, 20% @
- `input` -> **#*##
output -> 50% *, 50% #

Contoh lain ada di test case

# Asumsi:
- `input` tidak akan pernah kosong
- `input` pasti berisi virus

# Aturan coding:
- DILARANG menggunakan regex

*/

function virusPercentage (input) {
    let viruses = [];
    let result = "";

    for (let i = 0; i < input.length; i++) {
        let exist = false;
        for (let j = 0; j < viruses.length; j++) {
            if (input[i] === viruses[j].name) {
                exist = true;
                viruses[j].count++;
                break;
            }
        }
        
        if (!exist) {
            let virus = {
                name: input[i],
                count: 1
            }
            viruses.push(virus);
        }
    }
    
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 1; i < viruses.length; i++) {
            if (viruses[i].count > viruses[i-1].count) {
                let temp = viruses[i];
                viruses[i] = viruses[i-1];
                viruses[i-1] = temp;
                sorted = false;
            }
        }
    }
    console.log(viruses)

    for (let i = 0; i < viruses.length; i++) {
        let percent = viruses[i].count / input.length * 100;
        result += percent + "% " + viruses[i].name;
        if (i !== viruses.length - 1) result += ", ";
    }
    return result;
}

console.log(virusPercentage('**#*##')); // 50% *, 50% #
console.log(virusPercentage('**######')); // 75% #, 25% *
console.log(virusPercentage('**##@')); // 40% *, 40% #, 20% @
console.log(virusPercentage('@')); // 100% @
console.log(virusPercentage('#$*@')); // 25% #, 25% $, 25% *, 25% @
