const nums = [0, 1, 1]

/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums: number[]) {
  let x = 0
  return nums.map((val, i) => {
    x = (x * 2 + nums[i]) % 5

    return x % 5 === 0
  })
}

console.log(prefixesDivBy5(nums))
