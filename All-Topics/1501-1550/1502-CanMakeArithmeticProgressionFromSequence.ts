const arr = [3, 5, 1]

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr: number[]) {
  arr.sort((a, b) => a - b)

  let test = arr[1] - arr[0]
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== test) {
      return false
    }
  }

  return true
}

console.log(canMakeArithmeticProgression(arr))
