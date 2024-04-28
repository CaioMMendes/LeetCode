// const citations = [100]
const citations = [
  50, 57, 62, 65, 66, 78, 80, 81, 88, 90, 94, 97, 100, 112, 128, 135, 154, 165,
  168, 177, 183, 185, 186, 193, 202, 207, 211, 217, 219, 228, 233, 234, 235,
  238, 240, 247, 249,
]

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations: number[]) {
  const length = citations.length - 1
  let max = length
  let min = 0

  let result = 0

  while (min <= max) {
    const mid = Math.floor((max + min) / 2)

    const math = length - mid + 1
    if (citations[mid] > math) {
      result = math > result ? math : result
      max = mid - 1
    } else {
      result = citations[mid] > result ? citations[mid] : result
      min = mid + 1
    }
  }
  return result
}

console.log(hIndex(citations))
