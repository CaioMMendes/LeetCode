const nums1 = [1, 3, 4],
  nums2 = [1, 3, 4],
  k = 1

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function (nums1: number[], nums2: number[], k: number) {
  let result = 0

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (Number.isInteger(nums1[i] / (nums2[j] * k))) {
        result++
      }
    }
  }

  return result
}

console.log(numberOfPairs(nums1, nums2, k))
