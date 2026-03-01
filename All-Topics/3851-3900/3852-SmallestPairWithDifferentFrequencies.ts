const nums = [1, 1, 2, 2, 3, 4]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minDistinctFreqPair = function (nums: number[]) {
  const count: Record<string, number> = {}

  for (const val of nums) {
    if (count[val]) {
      count[val]++
    } else {
      count[val] = 1
    }
  }

  const keys = Object.keys(count)

  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      if (count[keys[i]] !== count[keys[j]]) {
        return [Number(keys[i]), Number(keys[j])]
      }
    }
  }

  return [-1, -1]
}

console.log(minDistinctFreqPair(nums))
