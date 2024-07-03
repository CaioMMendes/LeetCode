const nums1 = [1, 2, 2, 1],
  nums2 = [2, 2]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const result: number[] = []

  const count1 = {}
  const count2 = {}

  const nums1Length = nums1.length
  const nums2Length = nums2.length

  for (let i = 0; i < nums1Length; i++) {
    if (count1[nums1[i]]) {
      count1[nums1[i]]++
    } else {
      count1[nums1[i]] = 1
    }
  }

  for (let i = 0; i < nums2Length; i++) {
    if (count2[nums2[i]]) {
      count2[nums2[i]]++
    } else {
      count2[nums2[i]] = 1
    }
  }

  const keys1 = Object.keys(count1)
  const keys2 = Object.keys(count2)

  const smaller = keys1.length > keys2.length ? count2 : count1
  const bigger = keys1.length > keys2.length ? count1 : count2

  for (let key in smaller) {
    const min = Math.min(smaller[key], bigger[key])
    for (let i = 0; i < min; i++) {
      result.push(Number(key))
    }
  }

  return result
}

console.log(intersect(nums1, nums2))
