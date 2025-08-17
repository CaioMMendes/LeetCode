const arr = [1, 2, 2, 6, 6, 6, 6, 7, 10]

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr: number[]) {
  let count: Record<string, number> = {}
  const length = arr.length
  for (const val of arr) {
    if (count[val]) {
      count[val]++
    } else {
      count[val] = 1
    }

    if (count[val] / length > 0.25) return val
  }
}

console.log(findSpecialInteger(arr))
