const arr = [2, 2, 1, 2, 1]

/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function (arr: number[]) {
  let count = 0

  let sorted = true

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      sorted = false
      break
    }
  }

  if (!sorted) {
    count++
    arr.sort((a, b) => a - b)
  }

  let last = arr[0]

  for (let i = 0; i < arr.length; i++) {
    const dif = Math.abs(arr[i] - last)
    if (i === 0) {
      last = 1
    } else {
      if (dif > 1) {
        count++
      }
      last = Math.min(arr[i], last + 1)
    }
  }

  return last
}

console.log(maximumElementAfterDecrementingAndRearranging(arr))
