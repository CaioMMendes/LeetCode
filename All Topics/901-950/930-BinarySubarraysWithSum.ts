// const nums = [1, 2, 3, 4, 5, 6],
// const nums = [0, 0, 0, 0, 0],
const nums = [1, 0, 1, 0, 1],
  goal = 2;
console.log("-------------------------------------------------");
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums: number[], goal: number) {
  let result = 0;
  let sum = 0;
  const sumCount: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum === goal) {
      result++;
    }

    if (sumCount[sum - goal]) {
      result += sumCount[sum - goal];
    }

    sumCount[sum] = (sumCount[sum] || 0) + 1;
    console.log(sumCount, result, sum);
  }

  return result;
};
console.log(numSubarraysWithSum(nums, goal));

// var numSubarraysWithSum = function (nums: number[], goal: number) {
//   let result = 0;
//   const max = Math.max(...nums);
//   if (max === 0 && goal === 0) {
//     let sum = 0;
//     for (let index = 1; index <= nums.length; index++) {
//       sum += index;
//     }
//     return sum;
//   }
//   for (let index = 0; index < nums.length; index++) {
//     let sum = 0;
//     for (let j = 0; j < nums.length - index; j++) {
//       const element = nums[j + index];
//       sum += element;
//       if (sum === goal) {
//         result++;
//       }
//       if (sum > goal) {
//         j = +Infinity;
//       }
//     }
//   }
//   return result;
// };
