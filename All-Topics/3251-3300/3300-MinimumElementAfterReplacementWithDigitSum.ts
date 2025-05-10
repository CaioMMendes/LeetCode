const nums = [10, 12, 13, 14]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums: number[]) {
  return Math.min(
    ...nums.map((val) => {
      return String(val)
        .split("")
        .reduce((acc, cur) => acc + Number(cur), 0)
    })
  )
}

console.log(minElement(nums))
