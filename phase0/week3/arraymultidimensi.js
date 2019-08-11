// var people = [['andree', 10], ['tashya', 20]];

// if (people[0][1] < people[1][1]) {
//     var tempPersons = people[0];

//     people[0] = people[1];
//     people[1] = tempPersons;
// }


var array = []

var temp = []

for (let i = 0; i < 10; i++) {
    temp.push(i);
    array.push(temp);
}
console.log(array);