const nums = [23, 55, 42, 21]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMergedInteger = function (nums: number[]) {
  let strings = nums.map(String)

  let result = strings[0] + strings[1]

  for (let i = 2; i < nums.length; i += 2) {
    const merge = strings[i] + strings[i + 1]

    if (Number(merge) < Number(result)) {
      result = merge
    }
  }

  return Number(result)
}

console.log(minMergedInteger(nums))
