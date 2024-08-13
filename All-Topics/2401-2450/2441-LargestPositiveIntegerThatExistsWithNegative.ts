const nums = [-10, 8, 6, 7, -2, -3, -2, 10]

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums: number[]) {
  const numsLength = nums.length
  const alreadyFinded = {}
  let result = -1

  for (let index = 0; index < numsLength; index++) {
    const element = nums[index]

    if (!alreadyFinded[element]) {
      alreadyFinded[element] = true
    }
    const invertValue = element > 0 ? -element : Math.abs(element)
    if (alreadyFinded[invertValue]) {
      const absoluteValue = Math.abs(element)
      if (absoluteValue > result) {
        result = absoluteValue
      }
    }
  }
  return result
}

console.log(findMaxK(nums))
