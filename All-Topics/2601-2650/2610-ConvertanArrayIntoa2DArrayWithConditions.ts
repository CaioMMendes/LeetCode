const nums = [1, 3, 4, 1, 2, 3, 1]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums: number[]) {
  const map = new Map()

  for (const val of nums) {
    if (map.get(val)) {
      map.set(val, map.get(val) + 1)
    } else {
      map.set(val, 1)
    }
  }

  const result = []

  for (const [key, val] of map) {
    for (let i = 0; i < val; i++) {
      if (result?.[i]) {
        result[i].push(key)
      } else {
        result.push([key])
      }
    }
  }

  return result
}

console.log(findMatrix(nums))
