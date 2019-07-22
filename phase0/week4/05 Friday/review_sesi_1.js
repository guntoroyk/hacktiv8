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
  var output = []
  for (var i = 0; i < people.length; i++) {
    var round = people[i]
    var object = {}
    for (var j = 0; j < round.length; j++) {
      var person = round[j]
      var name = person[0]
      var point = person[1]
      if (!object[name]) {
        object[name] = point
      } else {
        object[name] += point
      }
    }
    output.push(object)
  }
  return output
}


function getWinner(object) {
  var highestScore = 0
  var winner = ''
  let draw = false
  var keys = Object.keys(object)
  var values = Object.values(object)
  for (var i = 0; i < keys.length; i++) {
    if (values[i] > highestScore) {
      highestScore = values[i]
      winner = keys[i]
      draw = false
    } else if (highestScore === values[i]) {
      draw = true
    }
  }
  if (draw) {
    return null
  } 
  return {winner: winner, score: highestScore}
}

// console.log(getWinner({ A: 150, B: 150, C: 170 }))

function finalWinner(game) {
  var scorePerRounds = convertPeopleArrayToObject(game)

  console.log(scorePerRounds)

  var winnerPerRounds = []
  for (var i = 0; i < scorePerRounds.length; i++) {
    var winner = getWinner(scorePerRounds[i])
    winnerPerRounds.push(winner)
  }

  console.log(winnerPerRounds)

  var winningCounts = {}
  for (var j = 0; j < winnerPerRounds.length; j++) {
    var name = winnerPerRounds[j].winner
    var score = winnerPerRounds[j].score
    if (!winningCounts[name]) {
      winningCounts[name] = {
        count: 1,
        score: score
      }
    } else {
      winningCounts[name].count++
      winningCounts[name].score += score
    }
  }

  console.log(winningCounts)

  var maxWin = 0
  for (var name in winningCounts) {
    if (winningCounts[name].count > maxWin) {
      maxWin = winningCounts[name].count
    }
  }

  var winners = []

  for (var name in winningCounts) {
    if (winningCounts[name].count === maxWin) {
      winners.push({name: name, score: winningCounts[name].score})
    }
  }

  console.log(winners)

  if (winners.length === 1) {
    return winners[0]
  }

  var winner = winners[0]

  for (var i = 1; i < winners.length; i++) {
    if (winners[i].score > winner.score) {
      winner = winner[i]
    }
  }

  return winner
 }

console.log(finalWinner([
  [['A', 60], ['B', 90], ['C', 120], ['A', 90]],
  [['A', 50], ['A', 75], ['D', 110], ['D', 25], ['D', 60]],
  [['A', 50], ['B', 40], ['C', 55], ['C', 60]],
  [['B', 70], ['D', 40], ['C', 89]],
  [['C', 40], ['D', 95], ['C', 54], ['D', 69]]
]))

// pemenangnya adalah D dengan skor akhir 359