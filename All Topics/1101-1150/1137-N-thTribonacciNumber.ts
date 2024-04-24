const n = 25

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n: number) {
  if (n === 1) return 1
  if (n === 2) return 1
  if (n === 3) return 2

  let three = 1
  let two = 1
  let one = 2
  let current = two + one + three

  for (let index = 3; index < n; index++) {
    current = two + one + three

    three = two
    two = one
    one = current
  }
  return current
}

console.log(tribonacci(n))
