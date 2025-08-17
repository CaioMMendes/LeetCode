const nums = [1, 2, 3, 4, 5]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums: number[]) {
  const set = new Set(nums)

  const reduce = [...set].reduce((acc, cur) => {
    if (cur < 1) return acc
    return acc + cur
  }, 0)

  if (reduce === 0) return Math.max(...set)
  return reduce
}

console.log(maxSum(nums))
