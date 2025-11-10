const nums = [1, 2, 1, 1, 3]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function (nums: number[]) {
  const elements = []
  let min = -1

  for (let i = 0; i < nums.length; i++) {
    if (elements[nums[i]]) {
      elements[nums[i]].push(i)
    } else {
      elements[nums[i]] = [i]
    }
  }

  for (const val of elements) {
    for (let i = 2; i < val?.length; i++) {
      if (min === -1) {
        min =
          Math.abs(val[i] - val[i - 2]) +
          Math.abs(val[i - 1] - val[i]) +
          Math.abs(val[i - 2] - val[i - 1])
        continue
      }
      const calc =
        Math.abs(val[i] - val[i - 2]) +
        Math.abs(val[i - 1] - val[i]) +
        Math.abs(val[i - 2] - val[i - 1])
      if (calc < min) min = calc
    }
  }

  return min
}

console.log(minimumDistance(nums))
