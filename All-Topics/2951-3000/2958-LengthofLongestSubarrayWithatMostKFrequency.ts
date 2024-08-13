const nums = [1, 2, 3, 1, 2, 3, 1, 2],
  k = 2;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums: number[], k: number) {
  let result = 0;
  let tempResult = 0;
  const numCount: Record<number, number> = {};
  const sliceNums = nums.slice();
  let indexes = 0;

  for (let num of sliceNums) {
    if (numCount[num]) {
      numCount[num]++;
    } else {
      numCount[num] = 1;
    }

    if (numCount[num] <= k) {
      tempResult++;
      result = Math.max(result, tempResult);
    } else {
      while (numCount[num] > k) {
        const removedNum = nums[indexes];
        if (removedNum !== undefined) {
          numCount[removedNum]--;
          tempResult--;
        }
        indexes++;
      }
      tempResult++;
      result = Math.max(result, tempResult);
    }
  }

  return result;
};

console.log(maxSubarrayLength(nums, k));
