const nums = [1, 2, 3, 4]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countOppositeParity = function (nums: number[]) {
  const oddCount = new Array(nums.length)
  const evenCount = new Array(nums.length)
  let currentOdd = 0
  let currentEven = 0

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] % 2 === 0) {
      currentEven++
    } else {
      currentOdd++
    }

    evenCount[i] = currentEven
    oddCount[i] = currentOdd
  }

  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result.push(oddCount[i])
    } else {
      result.push(evenCount[i])
    }
  }
  return result
}

console.log(countOppositeParity(nums))
