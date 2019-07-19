function highestScore (students) {
    // Code disini
    let result = {};
    let classes = [];

    for (let i = 0; i < students.length; i++) {
       if (!isThere(classes, students[i].class)) {
           classes.push(students[i].class);
       }
    }
    // console.log(classes);

    for (let i = 0; i < classes.length; i++) {
        let studentsWithHighestScore = {}
        let score = 0;

        // cari yg terbesar scorenya di classes[i]
        for (let j = 0; j < students.length; j++) {
           if (students[j].class === classes[i]) {
            if (students[j].score > score) {
                score = students[j].score;
                studentsWithHighestScore = students[j];
                delete studentsWithHighestScore.class;
            }
           }
        }
        // console.log(classes[i] + ": " + studentsWithHighestScore);
        result[classes[i]] = studentsWithHighestScore;
    }

    
    return result;
}

function isThere(classes, input) {
    for (let i = 0; i < classes.length; i++) {
        if (input === classes[i]) {
            return true;
        }
    }
    return false;
}

// console.log(isThere(['foxes', 'wolves'], 'skda'));

// TEST CASE
console.log(highestScore([
    {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
    {
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}