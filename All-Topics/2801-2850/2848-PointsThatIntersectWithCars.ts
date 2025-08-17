const nums = [
  [3, 6],
  [1, 5],
  [4, 7],
]

/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums: number[][]) {
  const set = new Set()

  for (const val of nums) {
    for (let i = val[0]; i <= val[1]; i++) {
      set.add(i)
    }
  }

  return set.size
}

console.log(numberOfPoints(nums))
