const nums = [4, 5, 4]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortByReflection = function (nums: number[]) {
  const updatedNums = nums.map((num) => {
    const number = num.toString(2).split("").reverse().join("")
    return [num, parseInt(number, 2)]
  })

  updatedNums.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0]
    }
    return a[1] - b[1]
  })

  return updatedNums.map((num) => num[0])
}

console.log(sortByReflection(nums))
