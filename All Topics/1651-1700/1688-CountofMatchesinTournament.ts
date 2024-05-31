const n = 3

/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n: number) {
  let teams = n

  let result = 0
  let stop = 0

  while (true && stop < 20) {
    const tempMatches = teams / 2
    if (Number.isInteger(tempMatches)) {
      result += tempMatches
      teams = tempMatches
    } else {
      const rounded = Math.floor(tempMatches)
      result += rounded
      teams = rounded + 1
    }
    stop++
    if (teams < 2) {
      break
    }
  }

  return result
}

console.log(numberOfMatches(n))
