const arr = [1, 2, 3],
  fn = function plusone(n: number, i: number | undefined) {
    return n + 1
  }

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr: number[], fn: (n: number, i: any) => number) {
  const result: number[] = []
  const arrLength = arr.length

  for (let i = 0; i < arrLength; i++) {
    result.push(fn(arr[i], i))
  }

  return result
}

console.log(map(arr, fn))
