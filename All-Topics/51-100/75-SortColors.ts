const nums = [2, 0, 2, 1, 1, 0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
 const sorted=quickSort(nums)
   for (let i = 0; i < nums.length; i++) {
    nums[i] = sorted[i];
  }
 return nums

function quickSort(arr) {
  if (arr.length < 2) {
    if (arr[0] > arr[1]) {
      return [arr[1], arr[0]]
    } else {
      return arr
    }
  }

  const left = []
  const right = []
  const pivot = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat(pivot).concat(quickSort(right))
}
};

console.log(sortColors(nums))
