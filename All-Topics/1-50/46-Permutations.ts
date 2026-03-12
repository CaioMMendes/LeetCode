const nums = [1, 2, 3]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums: number[]) {
  const length = nums.length
  const result: number[][] = []

  for (let i = 0; i < length; i++) {
    getResults([nums[i]], [i])
  }

  function getResults(currentArray: number[], indexes: number[]) {
    if (currentArray.length === length) {
      result.push(currentArray)
      return
    }

    for (let i = 0; i < length; i++) {
      if (indexes.some((val) => val === i)) continue
      getResults([...currentArray, nums[i]], [...indexes, i])
    }
  }

  return result
}

console.log(permute(nums))
