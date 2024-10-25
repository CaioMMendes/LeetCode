const arr = [2, 3, 4, 7, 11],
  k = 5

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr: number[], k: number) {
  let cur = 1
  let arrIndex = 0

  while (k > 0) {
    if (cur !== arr[arrIndex]) {
      k--
    } else {
      arrIndex++
    }

    cur++
  }

  return cur - 1
}

console.log(findKthPositive(arr, k))
