const nums1 = [4, 1, 3],
  nums2 = [5, 7]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1: number[], nums2: number[]) {
  const set2 = new Set(nums2)
  const sorted1 = nums1.sort((a, b) => a - b)
  for (const val of sorted1) {
    if (set2.has(val)) return val
  }

  const minOne = Math.min(...nums1)
  const minTwo = Math.min(...nums2)
  return find(minOne, minTwo)

  function find(num: number, num2: number) {
    if (num > num2) {
      return Number(String(num2) + String(num))
    }
    return Number(String(num) + String(num2))
  }
}

console.log(minNumber(nums1, nums2))
