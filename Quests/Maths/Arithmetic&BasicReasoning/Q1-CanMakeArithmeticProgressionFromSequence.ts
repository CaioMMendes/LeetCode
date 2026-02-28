const arr = [3, 5, 1]

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr: number[]) {
  arr.sort((a, b) => a - b)

  let last = -1

  for (let i = 1; i < arr.length; i++) {
    if (last === -1) {
      last = arr[i] - arr[i - 1]
      continue
    }

    if (arr[i] - arr[i - 1] !== last) return false

    last = arr[i] - arr[i - 1]
  }

  return true
}

console.log(canMakeArithmeticProgression(arr))
