const nums = [1, 2, 2, 3, 1]

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums: number[]) {
  const count: Record<string, number> = {}
  const length = nums.length

  for (let i = 0; i < length; i++) {
    if (count[nums[i]]) {
      count[nums[i]]++
    } else {
      count[nums[i]] = 1
    }
  }

  let max: string[] = []
  let maxValue = 0

  for (let key in count) {
    const element = count[key]
    if (element > maxValue) {
      maxValue = element
      max = [key]
    } else if (element === maxValue) {
      max.push(key)
    }
  }

  let result = +Infinity
  for (const value of max) {
    const firstIndex = nums.indexOf(Number(value))
    const lastIndex = (nums as any).findLastIndex(
      (data: number) => data === Number(value)
    )

    const dif = Math.abs(lastIndex - firstIndex) + 1
    if (dif < result) {
      result = dif
    }
  }

  return result
}

console.log(findShortestSubArray(nums))
