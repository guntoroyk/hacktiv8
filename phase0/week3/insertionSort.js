function sort(input) {
    let result = [];
    while(input.length > 0) {
        let biggest = [0, input[0]];
        for (let i = 1; i < input.length; i++) {
            if (input[i] < biggest[1]) {
                biggest[0] = i;
                biggest[1] = input[i];
            }
        }
        result.push(biggest[1]);
        input = throwAway(input, biggest[0]);
        console.log(result);
    }
    return "result";
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

var a = ["cacing", "ayam", "kuda", "anoa", "kancil"];

console.log(sort(a));