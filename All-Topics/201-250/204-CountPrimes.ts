const n = 10

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n: number) {
  let result = 0

  for (let i = 0; i < n; i++) {
    if (checkPrime(i)) result++
  }

  return result

  function checkPrime(number: number) {
    if (number <= 1) return false
    if (number <= 3) return true
    if (number % 2 === 0 || number % 3 === 0) return false

    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false
    }

    return true
  }
}

console.log(countPrimes(n))
