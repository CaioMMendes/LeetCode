const nums = [1, 3, 5, 4, 2, 6]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function (nums: number[]) {
  const n = nums.length
  if (n < 3) return false

  // Tentar todos os possíveis valores de p e q
  // onde 0 < p < q < n-1
  for (let p = 1; p < n - 1; p++) {
    for (let q = p + 1; q < n - 1; q++) {
      // Verificar se nums[0...p] é estritamente crescente
      let isFirstIncreasing = true
      for (let i = 1; i <= p; i++) {
        if (nums[i] <= nums[i - 1]) {
          isFirstIncreasing = false
          break
        }
      }

      // Verificar se nums[p...q] é estritamente decrescente
      let isMiddleDecreasing = true
      for (let i = p + 1; i <= q; i++) {
        if (nums[i] >= nums[i - 1]) {
          isMiddleDecreasing = false
          break
        }
      }

      // Verificar se nums[q...n-1] é estritamente crescente
      let isLastIncreasing = true
      for (let i = q + 1; i < n; i++) {
        if (nums[i] <= nums[i - 1]) {
          isLastIncreasing = false
          break
        }
      }

      // Se todas as três condições são atendidas, é triônico
      if (isFirstIncreasing && isMiddleDecreasing && isLastIncreasing) {
        return true
      }
    }
  }

  return false
}

console.log(isTrionic(nums))
