const nums = [1, 8, 1, 5, 1, 5, 8, 5]

/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialIntegers = function (nums: number[]) {
  const count: Record<string, number[]> = {}

  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]]) {
      count[nums[i]].push(i)
    } else {
      count[nums[i]] = [i]
    }
  }

  let result = 0

  for (const key in count) {
    const val = count[key]

    if (val.length !== 3) continue

    if (val[1] - val[0] === val[2] - val[1]) result++
  }

  return result
}

console.log(countSpecialIntegers(nums))
