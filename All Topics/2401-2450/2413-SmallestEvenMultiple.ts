const n = 6

/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n: number) {
  if (Number.isInteger(n / 2)) {
    return n
  } else {
    return n * 2
  }
}

console.log(smallestEvenMultiple(n))
