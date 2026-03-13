const nums = [1, 1, 2]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums: number[]) {
  const length = nums.length
  const result: number[][] = []
  const alreadyFind = new Set()

  for (let i = 0; i < length; i++) {
    getResults([nums[i]], [i])
  }

  function getResults(currentArray: number[], indexes: number[]) {
    if (currentArray.length === length) {
      if (alreadyFind.has(`${currentArray}`)) return
      result.push(currentArray)
      alreadyFind.add(`${currentArray}`)
      return
    }

    for (let i = 0; i < length; i++) {
      if (indexes.some((val) => val === i)) continue
      getResults([...currentArray, nums[i]], [...indexes, i])
    }
  }

  return result
}

console.log(permuteUnique(nums))
