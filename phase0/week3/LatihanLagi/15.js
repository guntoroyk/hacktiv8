function groupAnimals(animals) {
    // you can only write your code here!
    let result = [[]];
    let index = 0;
    
    for (let i = 1; i < animals.length; i++) {
        if (animals[i-1][0] > animals[i][0]) {
            let temp = "";
            temp = animals[i-1];
            animals[i-1] = animals[i];
            animals[i] = temp;
            result[index].push(animals[i-1]);
            
            if (result[index][0] === animals[i][0]) {
                result[index].push(animals[i]);
            } else {
                result.push([animals[i]]);
                index++;
            }
            
            
        }
    }
    
    return result;
    
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]