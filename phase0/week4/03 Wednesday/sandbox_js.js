var pokemon = [
  {
    name: 'bulbasaur',
    type: [
      'grass',
      'poison'
    ],
    isShiny: true,
    abilities: [
      'overgrowth'
    ],
    level: 15,
    evolutionLine: [
      // {
      //   name: 'Ivysaur',
      //   level: 16
      // },
      {
        name: 'Venusaur',
        level: 32
      },
    ]
  },
  {
    name: 'Charizard',
    type: [
      'flying',
      'fire',
    ],
    isShiny: false,
    abilities: [
      'blaze'
    ],
    level: 36
  },
  {
    name: 'Charmander',
    type: [
      'fire',
    ],
    isShiny: false,
    abilities: [
      'blaze'
    ],
    evolutionLine: [
      {
        name: 'Charmeleon',
        level: 16
      },
      {
        name: 'Charizard',
        level: 36
      }
    ],
    level: 5
  }
]


function call(arr) {
  var result = []
  
  // Manggil yang levelnya dibawah 10
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].level < 10) {
      result.push(arr[i])
    }
  }

  // Manggil yang typenya 'fire'
  // for(var i = 0; i < arr.length; i++) {
  //   for(var j = 0 ; j < arr[i].type.length; j++) {
  //     if(arr[i].type[j] === 'fire') {
  //       result.push(arr[i])
  //     }
  //   }
  // }

  return result
}

function train(arr) {
  var result = []
  for (var i = 0; i < arr.length; i++) {
    arr[i].level += 1
  }
  return arr
}
train(pokemon)

function evolve(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].evolutionLine !== undefined && arr[i].level === arr[i].evolutionLine[0].level) {
      arr[i].name = arr[i].evolutionLine[0].name
    }
  }
  return arr
}