const n = 4102

/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n: number) {
  let count = 1
  while (true) {
    if (!String(n - count).match(/0/) && !String(count).match(/0/)) {
      return [count, n - count]
    }
    count++
  }
}

console.log(getNoZeroIntegers(n))
