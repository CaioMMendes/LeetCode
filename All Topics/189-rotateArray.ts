const nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;

const rotate = function (nums: number[], k: number) {
  const numsToRotate = k % nums.length;

  const spliced = nums.splice(nums.length - numsToRotate);

  nums.unshift(...spliced);
  console.log(nums);
};

console.log(rotate(nums, k));
