const n = 5

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n: number) {
  const result = []
  if (n % 2 === 0) {
    for (let i = 1; i <= n / 2; i++) {
      result.push(i, -i)
    }
  } else {
    result.push(0)
    for (let i = 1; i <= n / 2; i++) {
      result.push(i, -i)
    }
  }
  return result
}

console.log(sumZero(n))
