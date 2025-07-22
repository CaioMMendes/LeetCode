const nums = [2, 5, 7, 8, 9, 2, 3, 4, 3, 1],
  k = 3

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function (nums: number[], k: number) {
  // Precisamos de pelo menos 2*k elementos para ter dois subarrays adjacentes
  if (nums.length < 2 * k) return false

  // Percorre todas as posições onde podem começar dois subarrays adjacentes
  for (let i = 0; i <= nums.length - 2 * k; i++) {
    let firstValid = true
    let secondValid = true

    // Verifica se o primeiro subarray [i, i+k-1] é estritamente crescente
    for (let j = i; j < i + k - 1; j++) {
      if (nums[j] >= nums[j + 1]) {
        firstValid = false
        break
      }
    }

    // Se o primeiro não é válido, continua para próxima posição
    if (!firstValid) continue

    // Verifica se o segundo subarray [i+k, i+2k-1] é estritamente crescente
    for (let j = i + k; j < i + 2 * k - 1; j++) {
      if (nums[j] >= nums[j + 1]) {
        secondValid = false
        break
      }
    }

    // Se ambos são válidos, encontramos a resposta
    if (secondValid) {
      return true
    }
  }

  return false
}

console.log(hasIncreasingSubarrays(nums, k))
