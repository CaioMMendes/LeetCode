const arr = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]

/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr: number[]) {
  const arrLength = arr.length
  const sortedArr = arr.sort((a, b) => a - b)
  const numbersToRemove = arrLength / 20
  sortedArr.splice(0, numbersToRemove)
  sortedArr.splice(arrLength - numbersToRemove * 2, numbersToRemove)

  const sum = sortedArr.reduce((acc, cur) => acc + cur, 0)
  return sum / (arrLength - numbersToRemove * 2)
}

console.log(trimMean(arr))
