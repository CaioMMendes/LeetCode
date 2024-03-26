const nums = [-5];

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums: number[]) {
  let min = 0;

  //   for (let index = 0; index < nums.length; index++) {
  //     const element = nums[index];
  //     if (element > 0) {
  //       if (element < min) {
  //         min = element;
  //       }
  //     }
  //   }
  //   return min;
  const sorted = nums.sort((a, b) => a - b);
  for (let index = 0; index < sorted.length; index++) {
    const element = sorted[index];
    if (element > 0) {
      if (min === 0) {
        if (element !== 1) return 1;
      }
      min = 1;
      const nextElement = sorted[index + 1];
      if (nextElement - element > 1) {
        console.log("first");
        return element + 1;
      }
    }
    if (index === sorted.length - 1 && element > 0) {
      return element + 1;
    }
  }
  return 1;
};

console.log(firstMissingPositive(nums));
