const height = [1, 2, 3, 4, 5],
  threshold = 2

/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
var stableMountains = function (height: number[], threshold: number) {
  const length = height.length
  const result = []

  for (let i = 1; i < length; i++) {
    if (height[i - 1] > threshold) {
      result.push(i)
    }
  }
  return result
}

console.log(stableMountains(height, threshold))
