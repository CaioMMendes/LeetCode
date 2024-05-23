const nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1: number[], nums2: number[]) {
  return nums1.map((number) => {
    const nums2Length = nums2.length
    const indexElement = nums2.indexOf(number)

    for (let i = indexElement + 1; i < nums2Length; i++) {
      console.log(nums2[i], number)
      if (nums2[i] > number) {
        return nums2[i]
      }
    }
    return -1
  })
}

console.log(nextGreaterElement(nums1, nums2))
