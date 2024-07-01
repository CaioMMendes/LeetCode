const arr = [1, 2, 34, 3, 4, 5, 7, 23, 12]

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr: number[]) {
  const arrLength = arr.length
  let count = 0

  for (let i = 0; i < arrLength; i++) {
    if (arr[i] % 2 !== 0) {
      count++
    } else {
      count = 0
    }
    if (count === 3) {
      return true
    }
  }
  return false
}

console.log(threeConsecutiveOdds(arr))
