const nums = [1, 2, 1, 3, 2, 5]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums: number[]) {
  const object = {}
  const numsLength = nums.length
  const result: number[] = []
  for (let index = 0; index < numsLength; index++) {
    if (object[nums[index]]) {
      object[nums[index]]++
    } else {
      object[nums[index]] = 1
    }
  }

  for (let key in object) {
    if (object[key] === 1) {
      result.push(Number(key))
    }
  }
  return result
}

console.log(singleNumber(nums))
