const ranks = [13, 2, 3, 1, 9],
  suits = ["a", "a", "a", "a", "a"]

/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks: number[], suits: string[]) {
  let countSuits: Record<string, number> = {}

  for (let i = 0; i < suits.length; i++) {
    if (countSuits[suits[i]]) {
      countSuits[suits[i]]++
      if (countSuits[suits[i]] === 5) {
        return "Flush"
      }
    } else {
      countSuits[suits[i]] = 1
    }
  }

  let countRanks: Record<string, number> = {}
  for (let i = 0; i < ranks.length; i++) {
    if (countRanks[ranks[i]]) {
      countRanks[ranks[i]]++
      if (countRanks[ranks[i]] === 3) {
        return "Three of a Kind"
      }
    } else {
      countRanks[ranks[i]] = 1
    }
  }

  const rankValues = Object.values(countRanks)
  if (rankValues.includes(2)) {
    return "Pair"
  }

  return "High Card"
}

console.log(bestHand(ranks, suits))
