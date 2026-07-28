const n = 5,
  s = 100

/**
 * @param {number} n
 * @param {number} s
 * @return {number}
 */
var largestInteger = function (n: number, s: number) {
  if (s > 9 * n) return -1
  let result = ""
  let remaining = s
  for (let i = 0; i < n; i++) {
    const digit = Math.min(9, remaining) //aceita zeros então sempre o primeiro digito tem que ser o maior
    result += digit
    remaining -= digit
  }
  return Number(result)
}

console.log(largestInteger(n, s))
