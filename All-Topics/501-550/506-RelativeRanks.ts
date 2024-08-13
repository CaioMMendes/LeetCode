const score = [10, 3, 8, 9, 4]

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score: number[]) {
  const sortedScore = [...score].sort((a, b) => b - a)
  const result: string[] = []
  const scoreLength = score.length
  for (let i = 0; i < scoreLength; i++) {
    const index = sortedScore.indexOf(score[i])

    if (index === 0) {
      result.push("Gold Medal")
    } else if (index === 1) {
      result.push("Silver Medal")
    } else if (index === 2) {
      result.push("Bronze Medal")
    } else {
      result.push(`${index + 1}`)
    }
  }
  return result
}

console.log(findRelativeRanks(score))
