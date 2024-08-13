const arr = [1, 2, 3, 4, 5],
  size = 1

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr: number[], size: number) {
  const result: number[][] = []
  const times = Math.floor(arr.length / size)

  for (let i = 0; i < times; i++) {
    result.push(arr.splice(0, size))
  }

  if (arr.length > 0) {
    result.push(arr)
  }
  return result
}

console.log(chunk(arr, size))
