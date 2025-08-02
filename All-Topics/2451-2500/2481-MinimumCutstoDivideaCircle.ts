const n = 4

/**
 * @param {number} n
 * @return {number}
 */
var numberOfCuts = function (n: number) {
  let num = 2
  let count = 1

  if (n === 1) return 0

  while (num < n) {
    num = num + 2
    count++
  }

  if (num === n) return count

  return n
}

console.log(numberOfCuts(n))
