const nums = [2, 3, 1, 3, 2]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums: number[]) {
  const count = {}
  const length = nums.length
  for (let i = 0; i < length; i++) {
    if (count[nums[i]]) {
      count[nums[i]]++
    } else {
      count[nums[i]] = 1
    }
  }

  const array: number[][] = []
  for (const key in count) {
    array.push([Number(key), count[key]])
  }

  array.sort((a, b) => a[1] - b[1] || b[0] - a[0])

  const result: number[] = []

  const arrayLength = array.length
  for (let index = 0; index < arrayLength; index++) {
    for (let j = 0; j < array[index][1]; j++) {
      result.push(array[index][0])
    }
  }

  return result
}

console.log(frequencySort(nums))
