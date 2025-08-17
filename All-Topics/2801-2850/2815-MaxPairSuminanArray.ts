const nums = [112, 131, 411]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums: number[]) {
  const map = new Map()

  for (const val of nums) {
    const splited = String(val).split("")
    let max = Number(splited[0])
    for (let i = 1; i < splited.length; i++) {
      const number = Number(splited[i])
      if (number > max) max = number
    }
    if (map.get(max)) {
      map.set(max, [...map.get(max), val])
    } else {
      map.set(max, [val])
    }
  }

  let result = 0

  for (const [key, val] of map) {
    let max1 = val[0] >= val[1] ? val[0] : val[1]
    let max2 = val[0] >= val[1] ? val[1] : val[0]
    if (val.length >= 2) {
      for (let i = 2; i <= val.length; i++) {
        if (val[i] >= max1) {
          max2 = max1
          max1 = val[i]
        } else if (val[i] > max2) {
          max2 = val[i]
        }
      }
      if (result < max1 + max2) result = max1 + max2
    }
  }

  return result === 0 ? -1 : result
}

console.log(maxSum(nums))
