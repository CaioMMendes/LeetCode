const n = 2

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n: number) {
  if (n === 0) return 0
  const isPar = n % 2 === 0
  let result = 1
  let oneNumbers = n
  let twoNumbers = 0
  let stop = Math.ceil(n / 2)
  let count = 1
  let length = n

  while (stop > count) {
    oneNumbers -= 2
    twoNumbers++
    length--

    result +=
      factorial(length) / (factorial(oneNumbers) * factorial(twoNumbers))
    count++
  }

  return result + (isPar ? 1 : 0)

  function factorial(n: number) {
    let result = 1
    for (let index = 1; index < n; index++) {
      result += index * result
    }
    return result
  }
}

console.log(climbStairs(n))
