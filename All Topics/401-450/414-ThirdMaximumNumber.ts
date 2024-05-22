const nums = [2, 2, 3, 1, 4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums: number[]) {
  const uniqueNums = [...new Set(nums)]
  const uniqueLength = uniqueNums.length

  if (uniqueLength < 3) {
    return Math.max(...uniqueNums)
  }

  for (let i = 0; i < 2; i++) {
    const max = Math.max(...uniqueNums)
    const index = uniqueNums.indexOf(max)
    uniqueNums.splice(index, 1)
  }
  return Math.max(...uniqueNums)
}

console.log(thirdMax(nums))
