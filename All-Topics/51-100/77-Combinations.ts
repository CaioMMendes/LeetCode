const n = 4,
  k = 2

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n: number, k: number) {
  const result: number[][] = []

  getCombinations(1, [])

  function getCombinations(current: number, array: number[]) {
    if (array.length === k) {
      result.push(array)
      return
    }

    let count = current
    while (count <= n) {
      getCombinations(count + 1, [...array, count])
      count++
    }
  }

  return result
}

console.log(combine(n, k))
