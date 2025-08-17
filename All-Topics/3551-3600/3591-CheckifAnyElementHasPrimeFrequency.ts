const nums = [1, 2, 3, 4, 5, 4]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function (nums: number[]) {
  const count: Record<string, number> = {}

  for (const val of nums) {
    if (count[val]) {
      count[val]++
    } else {
      count[val] = 1
    }
  }

  const values = Object.values(count)

  for (const val of values) {
    const result = checkPrime(val)
    if (result === true) return true
  }

  return false

  function checkPrime(number: number) {
    if (number <= 1) return false
    if (number <= 3) return true

    if (number % 2 === 0 || number % 3 === 0) return false

    // Testa até a raiz quadrada de n, pulando múltiplos de 2 e 3
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false
    }

    return true
  }
}

console.log(checkPrimeFrequency(nums))
