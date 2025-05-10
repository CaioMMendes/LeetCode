const nums = [2, 2, 3, 2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums: number[]) {
  const map = new Map()

  for (const val of nums) {
    if (map.get(val)) {
      map.set(val, map.get(val) + 1)
    } else {
      map.set(val, 1)
    }
  }

  for (const [key, val] of map) {
    if (val === 1) return key
  }
}

console.log(singleNumber(nums))
