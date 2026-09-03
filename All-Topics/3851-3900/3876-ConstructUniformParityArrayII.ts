const nums1 = [4, 6]

/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function (nums1: number[]) {
  let small = [0, +Infinity]
  let smallOdd = [0, +Infinity]
  let smallEven = [0, +Infinity]

  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] < small[1]) {
      small = [i, nums1[i]]
    }

    if (nums1[i] % 2 === 0) {
      if (nums1[i] < smallEven[1]) {
        smallEven = [i, nums1[i]]
      }
    } else if (nums1[i] < smallOdd[1]) {
      smallOdd = [i, nums1[i]]
    }
  }

  let result = false

  if (small[1] % 2 === 0) {
    for (let i = 0; i < nums1.length; i++) {
      const val = nums1[i]
      if (val % 2 === 0) continue

      return false
    }
  } else {
    for (let i = 0; i < nums1.length; i++) {
      const val = nums1[i]
      if (val % 2 !== 0) continue

      if (val - smallOdd[1] >= 1) continue
      return false
    }
  }

  return true
}

console.log(uniformArray(nums1))
