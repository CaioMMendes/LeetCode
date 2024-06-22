// const nums = [1, 1, 2, 1, 1],
//   k = 3
//2

const nums = [2, 2, 2, 1, 2, 2, 1, 2, 2, 2],
  k = 2
//16

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let oddCount = 0 // Contador de números ímpares encontrados
  let result = 0 // Resultado final
  let prefixCounts = new Array(nums.length + 1).fill(0) // Prefix sum array
  prefixCounts[0] = 1 // Iniciando o prefix sum com 1 para o caso de subarrays começando no início

  for (let num of nums) {
    // Incrementar oddCount se o número for ímpar
    if (num % 2 !== 0) {
      oddCount++
    }

    // Se oddCount - k for >= 0, significa que temos um subarray válido
    if (oddCount >= k) {
      result += prefixCounts[oddCount - k]
    }
    console.log(prefixCounts)
    // Incrementar o prefix count para o oddCount atual
    prefixCounts[oddCount]++
  }

  return result
}

console.log(numberOfSubarrays(nums, k))

//todo minha resposta deu timeout error
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var numberOfSubarrays = function (nums: number[], k: number) {
//   let odd = 0
//   const numsLength = nums.length

//   for (let index = 0; index < numsLength; index++) {
//     if (nums[index] % 2 !== 0) {
//       odd++
//     }
//   }

//   let result = 0

//   while (nums.length >= k) {
//     const numsLengthRepeat = nums.length
//     let oddCount = odd
//     for (let j = numsLengthRepeat - 1; 0 <= j; j--) {
//       if (oddCount === k) {
//         result++
//       }

//       if (nums[j] % 2 !== 0) {
//         oddCount--
//       }
//     }

//     const removedNumber = nums.shift()
//     if (removedNumber! % 2 !== 0) {
//       odd--
//     }
//   }

//   return result
// }
