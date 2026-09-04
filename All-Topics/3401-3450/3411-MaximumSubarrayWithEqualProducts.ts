const nums = [1, 2, 1, 2, 1, 1, 1]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function (nums: number[]) {
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    const arr = []
    let gcd = 0
    let lcm = 0
    for (let j = i; j < nums.length; j++) {
      arr.push(nums[j])

      const product = arr.reduce((acc, cur) => acc * cur, 1)

      if (gcd === 0) {
        gcd = arr[0]
      } else {
        gcd = findGcd(gcd, nums[j])
      }

      if (lcm === 0) {
        lcm = arr[0]
      } else {
        lcm = Math.abs(nums[j] * lcm) / findGcd(lcm, nums[j])
      }

      if (product === lcm * gcd && arr.length > result) result = arr.length
    }
  }

  return result

  function findGcd(val1: number, val2: number) {
    if (val1 === val2) return val1

    if (val1 > val2) {
      return findGcd(val1 - val2, val2)
    } else {
      return findGcd(val1, val2 - val1)
    }
  }
}

console.log(maxLength(nums))
