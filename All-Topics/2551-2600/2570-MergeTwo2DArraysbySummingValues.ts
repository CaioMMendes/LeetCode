const nums1 = [
    [1, 2],
    [2, 3],
    [4, 5],
  ],
  nums2 = [
    [1, 4],
    [3, 2],
    [4, 1],
  ]

/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1: number[][], nums2: number[][]) {
  const map1 = new Map()
  const map2 = new Map()
  const ids = new Set()

  for (const val of nums1) {
    map1.set(val[0], val[1])
    ids.add(val[0])
  }
  for (const val of nums2) {
    map2.set(val[0], val[1])
    ids.add(val[0])
  }

  const result = []

  for (let val of ids) {
    const sum = (map1.get(val) ?? 0) + (map2.get(val) ?? 0)
    result.push([val, sum])
  }

  result.sort((a, b) => a[0] - b[0])
  return result
}

console.log(mergeArrays(nums1, nums2))
