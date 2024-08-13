const nums = [null, {}, 3]

interface Array<T> {
  last(): T | -1
}

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  const length = this.length
  return this[length - 1] === undefined ? -1 : this[length - 1]
}

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

console.log(nums.last())
