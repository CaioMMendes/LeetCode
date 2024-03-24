const nums = [1, 3, 4, 2, 2];

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums: number[]) {
  let numbers = {};

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (!numbers[element]) {
      numbers[element] = element;
    } else {
      return element;
    }
  }
};

console.log(findDuplicate(nums));
