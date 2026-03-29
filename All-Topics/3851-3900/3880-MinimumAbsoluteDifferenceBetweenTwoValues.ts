const nums = [1, 0, 0, 2, 0, 1]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minAbsoluteDifference = function (nums: number[]) {
  let min = null

  const oneIndexes = nums
    .map((val, i) => {
      if (val === 1) return i
      return null
    })
    .filter((val) => val !== null)
  const twoIndexes = nums
    .map((val, i) => {
      if (val === 2) return i
      return null
    })
    .filter((val) => val !== null)

  for (const val of oneIndexes) {
    for (const val2 of twoIndexes) {
      const dif = Math.abs(val - val2)

      if (min === null || dif < min) {
        min = dif
      }
    }
  }

  return min === null ? -1 : min
}

console.log(minAbsoluteDifference(nums))
