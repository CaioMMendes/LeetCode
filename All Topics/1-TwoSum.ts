function twoSum(nums: number[], target: number): number[] {
  const numsPossibles = [...nums];
  for (let i = 0; i < nums.length; i++) {
    const actualNumber = numsPossibles[0];
    numsPossibles.shift();
    if (numsPossibles.indexOf(target - actualNumber) !== -1) {
      return [i, nums.lastIndexOf(target - actualNumber)];
    }
  }

  return [1, 2];
}
