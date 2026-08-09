const nums = [3, 2, 1, 5, 6, 4],
  k = 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums: number[], k: number) {
  const count: Record<string, number> = {}

  for (const val of nums) {
    if (count[val]) {
      count[val]++
    } else {
      count[val] = 1
    }
  }

  let result = ""
  let keys = Object.keys(count).sort((a, b) => {
    return Number(a) - Number(b)
  })
  let rest = k

  for (let i = keys.length - 1; i >= 0; i--) {
    const key = keys[i]
    rest -= count[key]

    if (rest <= 0) {
      return Number(key)
    }
  }
}

console.log(findKthLargest(nums, k))
