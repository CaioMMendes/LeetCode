const n = 10

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n: number) {
  const nums = []
  if (n === 2) {
    return 1
  } else if (n === 3) {
    return 2
  }

  while (n > 4) {
    nums.push(3)
    n -= 3
  }

  nums.push(n)

  const sum = nums.reduce((acc, cur) => acc * cur, 1)

  return sum
}

console.log(integerBreak(n))
