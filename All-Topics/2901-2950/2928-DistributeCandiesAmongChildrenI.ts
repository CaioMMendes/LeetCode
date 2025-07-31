const n = 5,
  limit = 2

/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n: number, limit: number) {
  let result = 0

  for (let i = 0; i <= limit; i++) {
    for (let j = 0; j <= limit; j++) {
      for (let k = 0; k <= limit; k++) {
        if (i + j + k > n || i + j + k !== n) continue
        result++
      }
    }
  }

  return result
}

console.log(distributeCandies(n, limit))
