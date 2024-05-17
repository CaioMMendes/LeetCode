const nums = [3, 2, 3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums: number[]) {
  const count = {}
  const numsLength = nums.length
  const oneThird = numsLength / 3
  const result = new Set()
  for (let i = 0; i < numsLength; i++) {
    const element = nums[i]
    if (count[element]) {
      count[element]++
    } else {
      count[element] = 1
    }
    if (count[element] > oneThird) {
      result.add(element)
    }
  }
  return [...result]
}

console.log(majorityElement(nums))
