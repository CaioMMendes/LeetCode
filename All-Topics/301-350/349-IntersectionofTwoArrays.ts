const nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1: number[], nums2: number[]) {
  const count1 = {}
  const count2 = {}
  const nums1Length = nums1.length
  const nums2Length = nums2.length

  for (let index = 0; index < nums1Length; index++) {
    const element = nums1[index]

    if (count1[element]) {
      count1[element]++
    } else {
      count1[element] = 1
    }
  }

  for (let index = 0; index < nums2Length; index++) {
    const element = nums2[index]
    if (count2[element]) {
      count2[element]++
    } else {
      count2[element] = 1
    }
  }
  const result: number[] = []
  for (let key in count1) {
    if (count2[key]) {
      result.push(Number(key))
    }
  }

  return result
}

console.log(intersection(nums1, nums2))
