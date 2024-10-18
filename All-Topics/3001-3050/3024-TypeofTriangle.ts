const nums = [3, 3, 3]

/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums: number[]) {
  const first = nums[0]
  const second = nums[1]
  const third = nums[2]
  if (
    first + second > third &&
    first + third > second &&
    third + second > first
  ) {
    if (first === second && second === third) {
      return "equilateral"
    }

    if (first !== second && second !== third && third !== first) {
      return "scalene"
    }

    if (first === second || second === third || third === first) {
      return "isosceles"
    }
  }

  return "none"
}

console.log(triangleType(nums))
