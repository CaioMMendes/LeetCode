const nums = [
  [1, 2, 3],
  [5, 17, 7],
  [9, 11, 10],
]

/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function (nums: number[][]) {
  let max = 0

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i][i]
    const num2 = nums[i][nums.length - i - 1]
    if (num > max && primeCheck(num)) {
      max = num
    }
    if (num2 > max && primeCheck(num2)) {
      max = num2
    }
  }

  return max

  function primeCheck(n: number) {
    if (n <= 1) return false
    if (n <= 3) return true

    // Elimina múltiplos de 2 e 3
    if (n % 2 === 0 || n % 3 === 0) return false

    // Testa até a raiz quadrada de n, pulando múltiplos de 2 e 3
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false
    }

    return true
  }
}

console.log(diagonalPrime(nums))
