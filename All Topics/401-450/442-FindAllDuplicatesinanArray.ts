const nums = [4, 3, 2, 7, 8, 2, 3, 1];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums: number[]) {
  const result: number[] = [];
  const numbers = {};

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (!numbers[element]) {
      numbers[element] = true;
    } else {
      result.push(element);
    }
  }

  return result;
};

console.log(findDuplicates(nums));
