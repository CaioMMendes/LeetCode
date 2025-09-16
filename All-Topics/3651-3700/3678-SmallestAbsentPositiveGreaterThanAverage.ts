const nums = [3, 5]

/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestAbsent = function (nums: number[]) {
  const set = new Set(nums)

  const medium = nums.reduce((acc, cur) => acc + cur, 0) / nums.length

  let start = Math.ceil(medium)

  if (start <= 0) start = 1

  while (true) {
    if (start > medium && !set.has(start)) return start
    start++
  }
}

console.log(smallestAbsent(nums))
