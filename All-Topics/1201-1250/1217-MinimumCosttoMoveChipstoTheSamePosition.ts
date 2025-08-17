const position = [1, 2, 3]

/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position: number[]) {
  let numberOfOdds = 0
  let numberOfEvens = 0

  for (const val of position) {
    if (val % 2 === 0) {
      numberOfEvens++
    } else {
      numberOfOdds++
    }
  }

  return Math.min(numberOfOdds, numberOfEvens)
}

console.log(minCostToMoveChips(position))
