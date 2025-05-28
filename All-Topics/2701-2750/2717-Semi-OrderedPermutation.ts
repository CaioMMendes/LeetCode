const nums = [2, 1, 4, 3]

/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function (nums: number[]) {
  const firstIndex = nums.indexOf(1)
  const lastIndex = nums.lastIndexOf(nums.length)

  let result = 0

  result += firstIndex
  result += nums.length - lastIndex - 1

  if (lastIndex < firstIndex) result--

  return result
}

console.log(semiOrderedPermutation(nums))
