const arr = [0, 10, 20, 30],
  fn = function greaterThan10(n) {
    return n > 10
  }

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr: number[], fn) {
  const result: number[] = []
  const arrLength = arr.length

  for (let i = 0; i < arrLength; i++) {
    if (fn(arr[i], i)) result.push(arr[i])
  }

  return result
}

console.log(filter(arr, fn))
