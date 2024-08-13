const player1 = [5, 10, 3, 2],
  player2 = [6, 5, 7, 3]

/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1: number[], player2: number[]) {
  let player1Hit = 0
  let player2Hit = 0
  const sum1 = player1.reduce((acc, cur, index) => {
    if (player1Hit > 0) {
      player1Hit--
      if (cur === 10) player1Hit = 2
      return acc + cur * 2
    }
    if (cur === 10) player1Hit = 2
    return acc + cur
  }, 0)
  const sum2 = player2.reduce((acc, cur, index) => {
    if (player2Hit > 0) {
      player2Hit--
      if (cur === 10) player2Hit = 2
      return acc + cur * 2
    }
    if (cur === 10) player2Hit = 2
    return acc + cur
  }, 0)

  if (sum1 > sum2) {
    return 1
  } else if (sum2 > sum1) {
    return 2
  } else {
    return 0
  }
}

console.log(isWinner(player1, player2))
