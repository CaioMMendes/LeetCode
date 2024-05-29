const nums1 = [1, 2, 3],
  nums2 = [2, 4, 6]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1: number[], nums2: number[]) {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)

  const allNumbers1 = [...set1]
  const allNumbers2 = [...set2]

  const set1Length = set1.size
  const set2Length = set2.size
  const numbers1: number[] = []
  const numbers2: number[] = []

  for (let i = 0; i < set1Length; i++) {
    if (!set2.has(allNumbers1[i])) {
      numbers1.push(allNumbers1[i])
    }
  }
  for (let i = 0; i < set2Length; i++) {
    if (!set1.has(allNumbers2[i])) {
      numbers2.push(allNumbers2[i])
    }
  }

  return [numbers1, numbers2]
}

console.log(findDifference(nums1, nums2))
