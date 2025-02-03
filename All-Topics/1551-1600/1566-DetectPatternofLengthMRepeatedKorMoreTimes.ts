const arr = [1, 2, 4, 4, 4, 4],
  m = 1,
  k = 3

/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function (arr: number[], m: number, k: number) {
  for (let i = m; i < arr.length; i++) {
    const element = String(arr.slice(i - m, i))
    let count = 1
    for (let j = i; j < arr.length; j += m) {
      const jElement = String(arr.slice(j, j + m))
      if (jElement === element) {
        count++
      } else {
        break
      }
    }
    if (count >= k) return true
  }

  return false
}

console.log(containsPattern(arr, m, k))
