const arr = [1, 0, 2, 3, 0, 4, 5, 0]

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr: number[]) {
  const arrLength = arr.length
  const helper = []

  for (let i = 0; i < arrLength; i++) {
    if (arr[i] !== 0) continue

    arr.splice(i, 0, 0)

    i++
  }
  arr.splice(arrLength)
}

console.log(duplicateZeros(arr))
