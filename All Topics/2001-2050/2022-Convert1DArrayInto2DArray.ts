const original = [1, 2, 3, 4],
  m = 2,
  n = 2

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  const originalLength = original.length
  const resultLength = m * n
  const result: number[][] = []

  if (originalLength !== resultLength) {
    return []
  }

  for (let i = 0; i < originalLength; i += n) {
    const array: number[] = []

    for (let j = 0; j < n; j++) {
      array.push(original[i + j])
    }
    result.push(array)
  }

  return result
}

console.log(construct2DArray(original, m, n))
