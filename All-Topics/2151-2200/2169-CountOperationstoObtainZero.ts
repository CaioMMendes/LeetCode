const num1 = 2,
  num2 = 3

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1: number, num2: number) {
  let count = 0

  while (num1 !== 0 && num2 !== 0) {
    if (num1 >= num2) {
      num1 -= num2
    } else {
      num2 -= num1
    }
    count++
  }

  return count
}

console.log(countOperations(num1, num2))
