const nums = ["01", "10"]

/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums: string[]) {
  const set = new Set(nums)

  return getBinaries("")

  function getBinaries(string: string): string {
    if (string.length > nums[0].length) return ""
    let initialString = string.padStart(nums[0].length, "0")

    if (!set.has(initialString)) return initialString
    return getBinaries("0" + string) || getBinaries("1" + string)
  }
}

console.log(findDifferentBinaryString(nums))
