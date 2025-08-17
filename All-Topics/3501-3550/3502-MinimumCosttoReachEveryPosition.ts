const cost = [5, 3, 4, 1, 3, 2]

/**
 * @param {number[]} cost
 * @return {number[]}
 */
var minCosts = function (cost: number[]) {
  let min = cost[0]

  return cost.map((val) => {
    if (min <= val) {
      return min
    } else {
      min = val
      return min
    }
  })
}

console.log(minCosts(cost))
