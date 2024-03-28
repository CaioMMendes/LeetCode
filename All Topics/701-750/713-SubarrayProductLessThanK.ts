const nums = [10, 5, 2, 6],
  k = 100;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums: number[], k: number) {
  let result = 0;

  for (; 0 < nums.length; ) {
    const elementIndex = nums.splice(0, 1)[0];
    if (elementIndex < k) {
      result++;
    }
    let product = 0;
    for (let j = 0; j < nums.length; j++) {
      const elementJ = nums[j];
      console.log(elementJ);
      if (j === 0) {
        product = elementIndex * elementJ;
      } else {
        product *= elementJ;
      }
      if (product < k) {
        result++;
      } else {
        j = +Infinity;
      }
    }
  }
  return result;
};

console.log(numSubarrayProductLessThanK(nums, k));
