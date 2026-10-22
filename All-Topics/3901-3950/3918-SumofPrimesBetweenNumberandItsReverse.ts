const n = 13

/**
 * @param {number} n
 * @return {number}
 */
var sumOfPrimesInRange = function (n: number) {
  const reversed = Number(String(n).split("").reverse().join(""))
  let result = 0

  const min = Math.min(n, reversed)
  const max = Math.max(n, reversed)

  for (let i = min; i <= max; i++) {
    if (checkIsPrime(i)) result += i
  }

  return result

  function checkIsPrime(num: number) {
    if (num < 2) return false
    if (num < 4) return true

    if (num % 2 === 0) return false

    for (let i = 3; i < num; i += 2) {
      if (num % i === 0) return false
    }
    return true
  }
}

console.log(sumOfPrimesInRange(n))
