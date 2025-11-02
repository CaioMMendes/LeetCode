const cost = [6, 5, 7, 9, 2, 2]

/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost: number[]) {
  const sorted = cost.sort((a, b) => b - a)

  let count = 0
  let result = 0
  for (let i = 0; i < sorted.length; i++) {
    if (count === 2) {
      count = 0
      continue
    }
    count++
    result += sorted[i]
  }

  return result
}

console.log(minimumCost(cost))
