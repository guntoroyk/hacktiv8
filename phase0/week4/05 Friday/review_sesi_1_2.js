/*
Outline yang wajib dikuasai student:
1. Mampu membuat object
2. Mampu mengubah tabel menjadi bentukkan array of object
3. Mampu mengakses object termasuk object di dalam array
4. Mampu melooping dan memanipulasi object
5. Mampu melooping dan memanipulasi array of object
*/

// RULES
// - cari pemenang di setiap ronde
// - pemenang akhir adalah player yang menang di paling banyak ronde
// - jika ada lebih dari satu pemain dengan jumlah kemenangan yang sama, maka ambil pemain dengan total skor tertinggi sebagai pemenang

function convertPeopleArrayToObject(people) {
    let result = {};
    
    for (let i = 0; i < people.length; i++) {
        let exist = false;
        for (let j = 0; j < Object.keys(result).length; j++) {
            if (people[i][0] === Object.keys(result)[j]) {
                exist = true;
            }
        }
        
        if (!exist) {
            result[people[i][0]] = people[i][1];
        } else {
            result[people[i][0]] += people[i][1];
        }
    }
    return result;
}

// { A: 150, B: 90, C: 120 }


// console.log(convertPeopleArrayToObject())

function getWinner(object) {
    let result = {};
    let highestScore = 0;
    let keys = Object.keys(object);
    let values = Object.values(object);
    let highestScoreIndex = 0;

    // console.log("keys:", keys);
    // console.log("values:", values);
    
    for (let i = 0; i < keys.length; i++) {
        if (values[i] > highestScore) {
            highestScore = values[i];
            highestScoreIndex = i;
        }
    }
    result[keys[highestScoreIndex]] = values[highestScoreIndex];
    return result;
}

// console.log(getWinner({ A: 150, B: 150, C: 170 }))

function finalWinner(game) {
    let arrayOfObject = [];
    for (let i = 0; i < game.length; i++) {
        let object = convertPeopleArrayToObject(game[i]);
        arrayOfObject.push(object);
    }

    console.log(arrayOfObject);

    let winnerPerRound = [];
    for (let i = 0; i < arrayOfObject.length; i++) {
        let winner = getWinner(arrayOfObject[i]);
        winnerPerRound.push(winner);
    }

    console.log(winnerPerRound);

    let resume = [];
    /**
     * resume = [
     *  {   name: "C",
     *      count: 2,
     *      score: 204 
     *  },
     *  {   name: "d",
     *      count: 2,
     *      score: 359 
     *  },
     * ]
     */

    for (let i = 0; i < winnerPerRound.length; i++) {
        let exist = false;
        let object = winnerPerRound[i];
        for (let j = 0; j < resume.length; j++) {
            if (Object.keys(object)[0] === resume[j].name) {
                exist = true;
                resume[j].count += 1;
                resume[j].score += Object.values(object)[0];
            }
        }
        if (!exist) {
            let newObject = {
                name: Object.keys(object)[0],
                count: 1,
                score: Object.values(object)[0]
            }
            resume.push(newObject);
        }
    }
    console.log(resume);

    /** resume = 
     * [  { name: 'A', count: 1, score: 150 },
          { name: 'D', count: 2, score: 359 },
          { name: 'C', count: 2, score: 204 } ]
     */

    let winner = [];

    let highestCount = 0;
    for (let i = 0; i < resume.length; i++) {
        if (resume[i].count > highestCount) {
            highestCount = resume[i].count;
        }
    }

    for (let i = 0; i < resume.length; i++) {
        if (resume[i].count === highestCount) {
            winner.push(resume[i]);
        }
    }

    if (winner.length === 1) {
        console.log(winner[0]);
        return "Pemenangnya adalah " + winner[0].name + " dengan skor akhir " + winner[0].score;
    } else {
        let highestScore = 0;
        let highestScoreIndex = 0;
        for (let i = 0; i < winner.length; i++) {
            if (winner[i].score > highestScore) {
                highestScore = winner[i].score;
                highestScoreIndex = i;
            }
        }

        console.log(winner[highestScoreIndex]);
        return "Pemenangnya adalah " + winner[highestScoreIndex].name + " dengan skor akhir " + winner[highestScoreIndex].score;
    }
}

console.log(finalWinner([
    [['A', 60], ['B', 90], ['C', 120], ['A', 90]],
    [['A', 50], ['A', 75], ['D', 110], ['D', 25], ['D', 60]],
    [['A', 50], ['B', 40], ['C', 55], ['C', 60]],
    [['B', 70], ['D', 40], ['C', 89]],
    [['C', 40], ['D', 95], ['C', 54], ['D', 69]]
]))

// pemenangnya adalah D dengan skor akhir 359