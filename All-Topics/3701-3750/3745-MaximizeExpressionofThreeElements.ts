const nums = [1, 4, 2, 5]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeExpressionOfThree = function (nums: number[]) {
  const firstTree = nums.slice(0, 3).sort((a, b) => b - a)
  let [top, mid, bot] = firstTree

  for (let i = 3; i < nums.length; i++) {
    const val = nums[i]

    if (val > top) {
      if (top > mid) mid = top

      top = val

      continue
    }

    if (val > mid) {
      mid = val
      continue
    }

    if (val < bot) {
      bot = val
    }
  }

  return top + mid - bot
}

console.log(maximizeExpressionOfThree(nums))
