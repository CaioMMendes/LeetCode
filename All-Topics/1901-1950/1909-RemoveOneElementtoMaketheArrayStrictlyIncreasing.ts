const nums = [1, 2, 10, 5, 7]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums: number[]) {
  let error = false

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      if (error) return false // Já houve um erro antes, então não é possível corrigir
      error = true // Marcamos que removemos um número

      // Verifica se remover nums[i-1] resolve o problema
      if (i === 1 || nums[i] > nums[i - 2]) {
        continue
      }
      // Verifica se remover nums[i] resolve o problema
      if (i + 1 === nums.length || nums[i + 1] > nums[i - 1]) {
        continue
      }

      return false
    }
  }

  return true
}

console.log(canBeIncreasing(nums))
