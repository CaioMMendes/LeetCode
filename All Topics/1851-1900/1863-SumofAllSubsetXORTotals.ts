const nums = [5, 1, 6, 7, 2, 3]

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums: number[]) {
  const matrix: number[][] = [[]]
  let result = 0

  for (let value of nums) {
    const length = matrix.length
    for (let i = 0; i < length; i++) {
      const subset = matrix[i].concat(value)
      const subsetLength = subset.length
      let sum = 0
      for (let j = 0; j < subsetLength; j++) {
        sum = sum ^ subset[j]
      }
      result += sum
      matrix.push(subset)
    }
  }

  return result
}

console.log(subsetXORSum(nums))
