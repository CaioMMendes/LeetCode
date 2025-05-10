const nums = [
    [1, 2],
    [3, 4],
  ],
  operation = "Add"

/**
 * @param {number[]} nums
 * @return {void}
 */
class ArrayWrapper {
  nums: number[]
  constructor(nums: number[]) {
    this.nums = nums
  }
}

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((acc, cur) => {
    return acc + cur
  }, 0)
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  return `[${this.nums}]`
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
