const nums = [5, 2, 5, 4, 5],
  k = 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums: number[], k: number) {
  const set = new Set([...nums])
  const setArray = [...set]
  const impossible = setArray.some((val) => val < k)

  if (impossible) return -1

  if (set.has(k)) {
    return set.size - 1
  }

  return set.size
}

console.log(minOperations(nums, k))
