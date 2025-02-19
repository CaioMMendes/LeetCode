const nums = [2, 5, 6, 9, 10]

/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums: number[]) {
  const max = Math.max(...nums)
  const min = Math.min(...nums)

  for (let i = max; i >= 1; i--) {
    if (max % i === 0 && min % i === 0) return i
  }
}

console.log(findGCD(nums))
