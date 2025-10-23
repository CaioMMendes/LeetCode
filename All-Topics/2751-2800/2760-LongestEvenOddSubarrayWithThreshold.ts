const nums = [3, 2, 5, 4],
  threshold = 5

/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function (nums: number[], threshold: number) {
  const oddOrEven = nums.map((num) => {
    if (num > threshold) return -1

    if (num % 2 === 0) return 1
    return 0
  })

  let max = 0
  let start = 0

  for (let i = 0; i < nums.length; i++) {
    start = oddOrEven[i]
    let count = 1
    if (oddOrEven[i] !== 1) {
      continue
    }

    for (let j = i + 1; j < nums.length; j++) {
      if (oddOrEven[j] === -1 || oddOrEven[j] === start) {
        if (count > max) max = count
        break
      }
      count++
      start = oddOrEven[j]
    }
    if (count > max) max = count
  }

  return max
}

console.log(longestAlternatingSubarray(nums, threshold))
