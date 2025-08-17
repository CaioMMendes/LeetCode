const n = 8

/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n: number) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }

  let left = 0
  let count = 1
  while (left <= sum) {
    left += count
    if (left === sum) {
      return count
    }
    sum -= count

    count++
  }

  return -1
}

console.log(pivotInteger(n))
