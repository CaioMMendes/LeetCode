const nums = [1, 13, 10, 12, 31]

/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums: number[]) {
  const set = new Set(nums)

  const revertedNumbers = nums.map((val) => {
    set.add(Number(String(val).split("").reverse().join("")))
    return
  })

  return set.size
}

console.log(countDistinctIntegers(nums))
