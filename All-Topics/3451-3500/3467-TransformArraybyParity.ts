const nums = [4, 3, 2, 1]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function (nums: number[]) {
  const count = {
    odd: 0,
    even: 0,
  }

  for (let val of nums) {
    if (val % 2 === 0) {
      count.even++
    } else {
      count.odd++
    }
  }

  const result = []
  for (let i = 0; i < count.even; i++) {
    result.push(0)
  }

  for (let i = 0; i < count.odd; i++) {
    result.push(1)
  }
  return result
}

console.log(transformArray(nums))
