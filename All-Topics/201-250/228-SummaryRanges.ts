// const nums = [0, 1, 2, 4, 5, 7]
const nums = [0, 1, 2, 4, 5, 7]

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums: number[]) {
  const result: string[] = []

  let start = Infinity
  if (nums.length === 0) {
    return []
  }
  if (nums.length === 1) {
    return [String(nums[0])]
  }

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index]
    const previousElement = nums[index - 1]

    if (start === Infinity) {
      start = element
    } else {
      if (element !== previousElement + 1) {
        result.push(
          `${
            previousElement === start ? start : `${start}->${previousElement}`
          }`
        )
        if (index === nums.length - 1) {
          result.push(String(element))
        }
        start = element
      } else if (index === nums.length - 1) {
        result.push(`${element === start ? element : `${start}->${element}`}`)
      }
    }
  }
  return result
}

console.log(summaryRanges(nums))
