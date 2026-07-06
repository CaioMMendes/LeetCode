const nums = [5724, 111, 350]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxDigitRange = function (nums: number[]) {
  let list: number[] = []
  let maxRange = -1

  for (const val of nums) {
    let max = 0
    let min = +Infinity
    const string = String(val)

    for (const digit of string) {
      const number = Number(digit)
      if (number > max) {
        max = number
      }
      if (number <= min) {
        min = number
      }
    }

    const range = max - min

    if (range > maxRange) {
      list = [val]
      maxRange = range
    } else if (range === maxRange) {
      list.push(val)
    }
  }

  return list?.reduce((acc, cur) => acc + cur, 0)
}

console.log(maxDigitRange(nums))
