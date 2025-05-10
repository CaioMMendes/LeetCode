const nums = [8, 4, 2, 30, 15]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function (nums: number[]) {
  const sorted = nums.slice().sort((a, b) => a - b)
  const sortedResult = []
  let cur = [nums[0]]
  let count = nums[0].toString(2).match(/1/g)?.length

  for (let i = 1; i < nums.length; i++) {
    const binary = nums[i].toString(2)
    const numberOfOne = binary.match(/1/g)?.length
    if (numberOfOne === count) {
      cur.push(nums[i])
    } else {
      count = binary.match(/1/g)?.length
      const sortedCur = cur.sort((a, b) => a - b)
      sortedResult.push(...sortedCur)
      cur = [nums[i]]
    }
  }

  const sortedCur = cur.sort((a, b) => a - b)
  sortedResult.push(...sortedCur)

  for (let i = 1; i < nums.length; i++) {
    if (sorted[i] !== sortedResult[i]) return false
  }

  return true
}

console.log(canSortArray(nums))
