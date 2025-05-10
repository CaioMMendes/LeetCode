const nums = [2, 5, 1, 4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function (nums: number[]) {
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    const first = Number(String(nums[i])[0])

    const setI = new Set()
    for (let i = first; i > 1; i--) {
      if (first % i === 0) {
        setI.add(i)
      }
    }

    for (let j = i + 1; j < nums.length; j++) {
      const last = Number(String(nums[j])[String(nums[j]).length - 1])
      let errorJ = false
      for (let i = last; i > 1; i--) {
        if (last % i === 0 && setI.has(i)) {
          errorJ = true
          break
        }
      }
      if (errorJ) continue
      result++
    }
  }

  return result
}

console.log(countBeautifulPairs(nums))
