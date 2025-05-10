const nums = [1, 2, 3]

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function (nums: number[]) {
  const mapped = nums.map((val) => {
    const string = String(val).split("")
    const max = Math.max(...string)
    return Number("".padStart(string.length, String(max)))
  })

  return mapped.reduce((acc, cur) => acc + cur, 0)
}

console.log(sumOfEncryptedInt(nums))
