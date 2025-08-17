const low = 1200,
  high = 1230

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low: number, high: number) {
  let result = 0
  for (let i = low; i <= high; i++) {
    const string = String(i)
    if (string.length % 2 === 0) {
      const first = string
        .slice(0, string.length / 2)
        .split("")
        .reduce((acc, cur) => acc + Number(cur), 0)
      const second = string
        .slice(string.length / 2, string.length)
        .split("")
        .reduce((acc, cur) => acc + Number(cur), 0)
      if (first === second) result++
    }
  }

  return result
}

console.log(countSymmetricIntegers(low, high))
