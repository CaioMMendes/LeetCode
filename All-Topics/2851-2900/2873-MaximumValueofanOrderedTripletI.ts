const nums = [12, 6, 1, 2, 7]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums: number[]) {
  const length = nums.length
  let max = 0
  for (let i = 0; i < length; i++) {
    const elementI = nums[i]

    for (let j = i + 1; j < length; j++) {
      const elementJ = nums[j]

      for (let k = j + 1; k < length; k++) {
        const elementK = nums[k]
        const calc = (elementI - elementJ) * elementK
        if (calc > max) max = calc
      }
    }
  }

  return max
}

console.log(maximumTripletValue(nums))
