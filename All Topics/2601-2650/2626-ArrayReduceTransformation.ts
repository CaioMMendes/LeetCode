const nums = [1, 2, 3, 4],
  fn = function sum(accum: number, curr: number) {
    return accum + curr
  },
  init = 0

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (
  nums: number[],
  fn: (accum: number, curr: number) => number,
  init: number
) {
  let sum = init

  for (let value of nums) {
    sum = fn(sum, value)
  }

  return sum
}

console.log(reduce(nums, fn, init))
