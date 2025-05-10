const nums = [1, 2, 2, 4]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums: number[]) {
  const set = new Set()
  const result = new Set()
  nums.forEach((val) => {
    if (set.has(val)) {
      result.add(val)
    } else {
      set.add(val)
    }
  })

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      result.add(i)
    }
  }
  return [...result]
}

console.log(findErrorNums(nums))
