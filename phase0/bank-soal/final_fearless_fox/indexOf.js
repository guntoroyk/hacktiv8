var makeUnique = ['aa', 'aa', 'b'];

var inserted = [];

function stringInArray(string, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === string) {
            return true;
        }
    }
    return false;
}

for (var i = 0; i < makeUnique.length; i++) {
    if (stringInArray(makeUnique[i], inserted) === false) {
        inserted.push(makeUnique[i]);
    }
}

console.log(inserted);