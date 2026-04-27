const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height: number[]) {
  let result = 0
  let left = 0
  let right = height.length - 1

  while (left < right) {
    const max = Math.min(height[left], height[right]) * (right - left)
    if (max > result) result = max

    if (height[left] <= height[right]) {
      left++
    } else {
      right--
    }
  }

  return result
}

console.log(maxArea(height))
