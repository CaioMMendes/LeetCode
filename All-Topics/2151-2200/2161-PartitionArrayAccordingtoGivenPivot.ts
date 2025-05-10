const nums = [9, 12, 5, 10, 14, 3, 10],
  pivot = 10

/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums: number[], pivot: number) {
  const small = []
  const equal = []
  const bigger = []

  for (const val of nums) {
    if (val < pivot) {
      small.push(val)
    } else if (val > pivot) {
      bigger.push(val)
    } else {
      equal.push(val)
    }
  }

  return small.concat(equal).concat(bigger)
}

console.log(pivotArray(nums, pivot))
