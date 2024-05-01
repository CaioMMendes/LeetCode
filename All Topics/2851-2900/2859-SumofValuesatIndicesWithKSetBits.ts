const nums = [1],
  k = 0
// const nums = [5, 10, 1, 5, 2],
//   k = 1

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums: number[], k: number) {
  if (k === 0) {
    return nums[0]
  }
  const numsLength = nums.length
  let result = 0
  for (let index = 0; index < numsLength; index++) {
    const binaryIndex = index.toString(2)
    const count = binaryIndex.match(/1/g)?.length
    if (count === k) {
      result += nums[index]
    }
  }

  return result
}

console.log(sumIndicesWithKSetBits(nums, k))

//todo solução melhor movendo os bites
// var sumIndicesWithKSetBits = function (nums, k) {
//   if (k == 0) return nums[0]
//   let sum = 0
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0
//     let temp = i
//     while (temp != 0) {
//       if (temp % 2 == 1) {
//         count++
//         temp = temp >> 1
//       } else {
//         temp = temp >> 1
//       }
//     }
//     if (count == k) sum += nums[i]
//   }
//   return sum
// }
