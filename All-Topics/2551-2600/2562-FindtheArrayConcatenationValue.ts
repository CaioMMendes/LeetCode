const nums = [7, 52, 2, 4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums: number[]) {
  const result = []
  const isOdd = nums.length % 2 !== 0
  const half = Math.floor(nums.length / 2)
  for (let i = 0; i < half; i++) {
    result.push(Number(String(nums[i]) + String(nums[nums.length - i - 1])))
  }
  if (isOdd) result.push(nums[half])
  return result.reduce((acc, cur) => acc + cur, 0)
}

console.log(findTheArrayConcVal(nums))
