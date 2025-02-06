const nums = [1, 2, 4, 5, 10]

/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums: number[]) {
  let result = 0

  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] * nums[j]
      if (map.has(sum)) {
        map.set(sum, map.get(sum) + 1)
      } else {
        map.set(sum, 1)
      }
    }
  }

  for (let [key, val] of map) {
    if (val > 1) {
      result += val * (val - 1) * 4
    }
  }

  return result
}

console.log(tupleSameProduct(nums))
