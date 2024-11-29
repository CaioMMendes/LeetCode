const nums1 = [1, 1, 3, 2],
  nums2 = [2, 3],
  nums3 = [3]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (
  nums1: number[],
  nums2: number[],
  nums3: number[]
) {
  const set = new Set(nums1)
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)
  const set3 = new Set(nums3)

  for (let val of nums2) {
    set.add(val)
  }
  for (let val of nums3) {
    set.add(val)
  }
  const resultSet = new Set()
  for (let val of set) {
    const sum =
      (set1.has(val) ? 1 : 0) +
      (set2.has(val) ? 1 : 0) +
      (set3.has(val) ? 1 : 0)
    if (sum >= 2) resultSet.add(val)
  }

  return [...resultSet]
}

console.log(twoOutOfThree(nums1, nums2, nums3))
