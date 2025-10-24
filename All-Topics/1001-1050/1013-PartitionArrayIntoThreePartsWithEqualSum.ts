const arr = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr: number[]) {
  const sum = arr.reduce((acc, cur) => acc + cur, 0)
  const thirdPart = sum / 3

  if (!Number.isInteger(thirdPart)) return false

  let count = 0

  let currentSum = 0

  for (const val of arr) {
    currentSum += val
    if (currentSum === thirdPart) {
      count++
      currentSum = 0

      if (count === 3) break
    }
  }

  return count === 3
}

console.log(canThreePartsEqualSum(arr))
