const nums = [
  [3, 1, 2, 4, 5],
  [1, 2, 3, 4],
  [3, 4, 5, 6],
]

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums: number[][]) {
  const map = nums.map((arr) => {
    return new Set(arr)
  })

  const result = []
  const selectedArray = [...map[0]]
  if (nums.length === 1) return nums[0].sort((a, b) => a - b)
  for (let i = 0; i < selectedArray.length; i++) {
    const number = selectedArray[i]
    for (let j = 1; j < nums.length; j++) {
      if (!map[j].has(number)) {
        break
      }
      if (j === nums.length - 1) {
        result.push(number)
      }
    }
  }

  return result.sort((a, b) => a - b)
}

console.log(intersection(nums))
