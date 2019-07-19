function graduates (students) {
    // Code disini
    let result = {};
    let classes = [];

    // kelompokkan kelas kelsa yg ada
    for (let i = 0; i < students.length; i++) {
        if (!isThere(classes, students[i].class)) {
            classes.push(students[i].class);
        }
    }
    // console.log(classes)

    // cari students yg scorenya > 75 di setiap kelas
    for (let i = 0; i < classes.length; i++) {
        let studentsGraduate = [];

        for (let j = 0; j < students.length; j++) {
            if (students[j].class === classes[i]) {
                if (students[j].score > 75) {
                    delete students[j].class;
                    studentsGraduate.push(students[j]);
                }
            }
        }
        // console.log(classes[i]);
        // console.log(studentsGraduate);

        result[classes[i]] = studentsGraduate;
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

console.log(graduates([
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
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
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
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}