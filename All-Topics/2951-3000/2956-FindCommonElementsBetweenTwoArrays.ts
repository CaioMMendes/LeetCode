const nums1 = [4, 3, 2, 3, 1],
  nums2 = [2, 2, 5, 2, 3, 6]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1: number[], nums2: number[]) {
  const result1: number[] = []
  const result2: number[] = []
  let sum1 = 0
  let sum2 = 0

  const nums1Length = nums1.length
  const nums2Length = nums2.length

  for (let i = 0; i < nums1Length; i++) {
    const element1 = nums1[i]
    if (result1.some((number) => number === element1)) {
      sum1++
    } else {
      if (nums2.some((number) => number === element1)) {
        result1.push(element1)
      }
    }
  }

  for (let i = 0; i < nums2Length; i++) {
    const element2 = nums2[i]
    if (result2.some((number) => number === element2)) {
      sum2++
    } else {
      if (nums1.some((number) => number === element2)) {
        result2.push(element2)
      }
    }
  }

  return [result1.length + sum1, result2.length + sum2]
}

console.log(findIntersectionValues(nums1, nums2))
