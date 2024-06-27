const nums = [0, 3, 97, 102, 200],
  target = 300;

const threeSumClosest = function (nums: number[], target: number) {
  let output = Infinity;

  const numsLength = nums.length;

  for (let index = 0; index < numsLength - 2; index++) {
    for (let j = 0; j < numsLength - 2 - index; j++) {
      const sum = nums[index] + nums[index + j + 1];
      for (let k = index + j + 2; k < numsLength; k++) {
        const currentSum = sum + nums[k];
        if (Math.abs(currentSum - target) < Math.abs(output - target)) {
          output = currentSum;
        }
      }
    }
  }

  return output;
};

console.log(threeSumClosest(nums, target));
