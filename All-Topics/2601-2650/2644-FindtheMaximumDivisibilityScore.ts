const nums = [2, 9, 15, 50],
  divisors = [5, 3, 7, 2]

/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function (nums: number[], divisors: number[]) {
  let result = [+Infinity, 0]

  for (let i = 0; i < divisors.length; i++) {
    let count = 0

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] % divisors[i] === 0) {
        count++
      }
    }
    if (count > result[1]) {
      result = [divisors[i], count]
    } else if (count === result[1] && result[0] > divisors[i]) {
      result = [divisors[i], count]
    }
  }

  return result[0]
}

console.log(maxDivScore(nums, divisors))
