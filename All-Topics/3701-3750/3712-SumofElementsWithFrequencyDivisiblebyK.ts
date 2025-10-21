const nums = [1, 2, 2, 3, 3, 3, 3, 4],
  k = 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function (nums: number[], k: number) {
  const map = new Map()

  for (let val of nums) {
    if (map.has(val)) {
      map.set(val, map.get(val) + 1)
    } else {
      map.set(val, 1)
    }
  }

  return (
    [...map]
      ?.filter(([key, val]) => val % k === 0)
      ?.reduce((acc, [key, val]) => acc + val * key, 0) ?? 0
  )
}

console.log(sumDivisibleByK(nums, k))
