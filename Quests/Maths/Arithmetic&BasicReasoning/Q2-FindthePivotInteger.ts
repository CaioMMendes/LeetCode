const n = 8

/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n: number) {
  let total = 0

  for (let i = 1; i <= n; i++) {
    total += i
  }

  let current = 0

  for (let i = 1; i <= n; i++) {
    current += i

    if (current === total) return i
    if (current > total) return -1
    total -= i
  }

  return -1
}

console.log(pivotInteger(n))
