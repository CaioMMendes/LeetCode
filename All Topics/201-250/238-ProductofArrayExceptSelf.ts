const nums = [1, 2, 3, 4, 1, -1];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums: number[]) {
  const includesZero = nums.filter((number) => number === 0);
  const numsLength = nums.length;
  const result: number[] = [];
  let numbers = {};
  let product = 1;
  for (let index = 0; index < numsLength; index++) {
    const number = nums[index];
    if (includesZero.length > 1) {
      result.push(0);
    } else if (includesZero.length === 1 && number !== 0) {
      result.push(0);
    } else {
      if (index > 0) {
        if (Object.keys(numbers).includes(String(number))) {
          result.push(numbers[number]);
        } else if (Object.keys(numbers).includes(String(-number))) {
          result.push(-numbers[-number]);
        } else {
          product = 1;
          for (let j = 0; j < numsLength; j++) {
            if (j !== index) {
              product *= nums[j];
            }
          }
          result.push(product);
          numbers = { ...numbers, [number]: product };
        }
      } else {
        product = 1;
        for (let j = 0; j < numsLength; j++) {
          if (j !== index) {
            product *= nums[j];
          }
        }
        result.push(product);
        numbers = { ...numbers, [number]: product };
      }
    }
  }
  return result;
};

console.log(productExceptSelf(nums));
