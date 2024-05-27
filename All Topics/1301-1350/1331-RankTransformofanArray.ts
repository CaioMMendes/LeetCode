const arr = [37, 12, 28, 9, 100, 56, 80, 5, 12]

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr: number[]) {
  const unique = [...new Set(arr)]
  const sorted = unique?.sort((a, b) => a - b)
  const sortedLength = sorted.length

  const map = new Map()

  for (let i = 0; i < sortedLength; i++) {
    map.set(sorted[i], i + 1)
  }

  const result = arr.map((value) => map.get(value))
  return result
}

console.log(arrayRankTransform(arr))
