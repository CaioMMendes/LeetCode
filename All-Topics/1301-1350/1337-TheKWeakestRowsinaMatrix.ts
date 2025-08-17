const mat = [
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  k = 3

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat: number[][], k: number) {
  const count = mat
    .map((val, i) => [searchLastOne(val), i])
    .sort((a, b) => a[0] - b[0] || a[1] - b[1])
  return count.splice(0, k).map((val) => val[1])

  function searchLastOne(array: number[]) {
    let bot = 0
    let top = array.length - 1
    let lastOneIndex = -1

    while (bot <= top) {
      let mid = Math.floor((bot + top) / 2)

      if (array[mid] === 1) {
        lastOneIndex = mid
        bot = mid + 1
      } else {
        top = mid - 1
      }
    }

    return lastOneIndex + 1
  }
}

console.log(kWeakestRows(mat, k))
