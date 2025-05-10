const n = 521

/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n: number) {
  return String(n)
    .split("")
    .reduce((acc, cur, index) => {
      if (index % 2 === 0) {
        return acc + Number(cur)
      } else {
        return acc - Number(cur)
      }
    }, 0)
}

console.log(alternateDigitSum(n))
