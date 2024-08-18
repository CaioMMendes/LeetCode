const n = 10,
  m = 3

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n: number, m: number) {
  let sum1 = 0
  let sum2 = 0
  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
      sum2 += i
    } else {
      sum1 += i
    }
  }

  return sum1 - sum2
}

console.log(differenceOfSums(n, m))
