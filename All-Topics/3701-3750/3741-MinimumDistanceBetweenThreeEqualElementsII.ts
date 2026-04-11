const nums = [1, 1, 2, 3, 2, 1, 2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function (nums: number[]) {
  const numsMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]
    if (numsMap.has(element)) {
      numsMap.get(element).push(i)
    } else {
      numsMap.set(element, [i])
    }
  }

  let result = null

  for (const [key, val] of numsMap) {
    if (val.length < 3) continue

    for (let i = 2; i < val.length; i++) {
      const sum =
        Math.abs(val[i - 2] - val[i - 1]) +
        Math.abs(val[i - 1] - val[i]) +
        Math.abs(val[i] - val[i - 2])
      if (result === null || sum < result) {
        result = sum
      }
    }
  }

  return result ?? -1
}

console.log(minimumDistance(nums))
