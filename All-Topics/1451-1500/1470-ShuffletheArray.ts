const nums = [2, 5, 1, 3, 4, 7],
  n = 3

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums: number[], n: number) {
  const secondHalf = nums.splice(n, 2 * n)

  const result: number[] = []
  nums.forEach((element, index) => {
    result.push(element, secondHalf[index])
  })

  return result
}

console.log(shuffle(nums, n))
