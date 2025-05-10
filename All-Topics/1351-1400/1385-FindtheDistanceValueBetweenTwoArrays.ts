const arr1 = [4, 5, 8],
  arr2 = [10, 9, 1, 8],
  d = 2

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (
  arr1: number[],
  arr2: number[],
  d: number
) {
  let result = 0

  for (const val of arr1) {
    let error = false

    for (const val2 of arr2) {
      const math = Math.abs(val - val2)
      if (math <= d) {
        error = true
        break
      }
    }
    if (!error) result++
  }

  return result
}

console.log(findTheDistanceValue(arr1, arr2, d))
