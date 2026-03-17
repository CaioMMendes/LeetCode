const nums = [3, 30, 34, 5, 9]

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums: number[]) {
  const strings = nums.map(String)

  strings.sort((a, b) => (b + a).localeCompare(a + b))

  if (strings[0][0] === "0") return "0"

  return strings.join("")
}

console.log(largestNumber(nums))
