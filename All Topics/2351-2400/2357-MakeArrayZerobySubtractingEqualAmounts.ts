const nums = [1, 5, 0, 3, 5]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums: number[]) {
  let min = Math.min(...nums.filter((num) => num !== 0))
  let result = 0
  while (min !== 0 && min !== Infinity) {
    let tempMin = +Infinity

    nums = nums.map((num) => {
      if (num === 0) return num
      const tempNum = num - min
      if (tempNum < tempMin && tempNum !== 0) {
        tempMin = tempNum
      }

      return tempNum
    })
    min = tempMin === +Infinity ? 0 : tempMin
    result++
  }

  return result
}

console.log(minimumOperations(nums))
