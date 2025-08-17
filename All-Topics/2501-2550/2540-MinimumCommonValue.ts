const nums1 = [1, 2, 3],
  nums2 = [2, 4]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1: number[], nums2: number[]) {
  const set1 = new Set(nums1)

  for (let i = 0; i < nums2.length; i++) {
    if (set1.has(nums2[i])) return nums2[i]
  }

  return -1
}

console.log(getCommon(nums1, nums2))
