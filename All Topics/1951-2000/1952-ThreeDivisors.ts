const n = 4

/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n: number): boolean {
  let count = 2
  let length = n - 1

  for (let i = 2; i < length; i++) {
    if (n % i === 0) {
      count++
    }
    if (count > 3) {
      return false
    }
  }
  if (count === 3) {
    return true
  }
  return false
}

console.log(isThree(n))
