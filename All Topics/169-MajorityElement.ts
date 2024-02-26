const nums = [2, 2, 1, 1, 1, 2, 2];

const majorityElement = function (nums: number[]) {
  let countNumbers = {};
  const halfNumbers = nums.length / 2;
  for (let index = 0; index < nums.length; index++) {
    const number = nums[index];

    countNumbers = countNumbers[number]
      ? { ...countNumbers, [number]: countNumbers[number] + 1 }
      : { ...countNumbers, [number]: 1 };

    if (countNumbers[number] > halfNumbers) break;
  }

  for (let numberKey in countNumbers) {
    const value = countNumbers[numberKey];
    if (value > halfNumbers) {
      return numberKey;
    }
  }
};

console.log(majorityElement(nums));
