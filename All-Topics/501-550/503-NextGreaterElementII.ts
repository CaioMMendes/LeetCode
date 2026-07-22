const nums = [1, 2, 1]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums: number[]) {
  const max = Math.max(...nums)

  return nums.map((num, i) => {
    if (num === max) return -1

    let index = 0
    while (true) {
      if (nums[(index + i) % nums.length] > num)
        return nums[(index + i) % nums.length]
      index++
    }
  })
}

console.log(nextGreaterElements(nums))
