const heights = [1, 1, 4, 2, 1, 3]

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights: number[]) {
  const sortedArray = heights.slice().sort((a, b) => a - b)
  const heightsLength = heights.length
  let result = 0
  for (let i = 0; i < heightsLength; i++) {
    if (sortedArray[i] !== heights[i]) {
      result++
    }
  }
  return result
}

console.log(heightChecker(heights))
