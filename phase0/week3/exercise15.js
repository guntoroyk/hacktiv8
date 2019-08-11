function bubbleSort(arr) {
    var swapped = false;
    while (swapped === false) {
        swapped = true;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = false;
            }
        }
    }
    return arr;
}

function groupAnimals(animals) {
    // you can only write your code here!
    animals = bubbleSort(animals);
    var newAnimals = [[animals[0]]];
    var index = 0;
    for (let i = 1; i < animals.length; i++) {
        
        if (animals[i][0] === newAnimals[index][0][0]) {
            newAnimals[index].push(animals[i])
        } 
        else {
            newAnimals.push([animals[i]]);
            index++;
        }
        
    }
    return newAnimals;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
