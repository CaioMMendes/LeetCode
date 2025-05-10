const nums = [0, 1, 2, 2, 4, 4, 1]

/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums: number[]) {
  const evens: Record<string, number> = {}
  let result = -1

  for (const value of nums) {
    if (value % 2 !== 0) continue
    if (evens[value]) {
      evens[value]++
    } else {
      evens[value] = 1
    }
  }

  for (const key in evens) {
    if (evens[key] > (result === -1 ? 0 : evens[result])) {
      result = Number(key)
    } else if (evens[key] === evens[result] && Number(key) < result) {
      result = Number(key)
    }
  }

  return result
}

console.log(mostFrequentEven(nums))
