// const nums = [3, 2, 1, 2, 3, 4, 3, 4, 5, 9, 10, 11],
//   k = 3

const nums = [16, 31, 33, 17, 18, 19, 32, 34],
  k = 4

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function (nums: number[], k: number) {
  const count = {}

  const numsLength = nums.length

  if (numsLength % k !== 0) {
    return false
  }

  for (let i = 0; i < numsLength; i++) {
    if (count[nums[i]]) {
      count[nums[i]]++
    } else {
      count[nums[i]] = 1
    }
  }

  for (let key in count) {
    const value = count[key]
    const numberKey = Number(key)
    for (let index = 0; index < value; index++) {
      for (let j = 0; j < k; j++) {
        const numberPlusJ = numberKey + j
        if (count[numberPlusJ] > 0) {
          count[numberPlusJ]--
        } else {
          return false
        }
      }
    }
  }

  return true
}

console.log(isPossibleDivide(nums, k))
