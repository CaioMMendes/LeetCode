const a = 14,
  b = 6

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var calculateScore = function (a: number, b: number) {
  const binnaryA = a.toString(2)
  const binnaryB = b.toString(2)

  const countA = countOnes(binnaryA)
  const countB = countOnes(binnaryB)

  if (countA >= countB) {
    return countA * countB
  } else {
    return Math.floor(countB / countA)
  }

  function countOnes(str: string) {
    let count = 0
    for (const val of str) {
      if (val === "1") count++
    }
    return count
  }
}

console.log(calculateScore(a, b))
