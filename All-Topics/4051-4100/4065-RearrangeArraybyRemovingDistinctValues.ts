const nums = [3, 1, 3, 2, 1, 3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums: number[]) {
  const count: Record<string, number> = {}

  for (const val of nums) {
    if (count[val]) {
      count[val]++
    } else {
      count[val] = 1
    }
  }

  let empty = nums.length === 0
  const result = []
  while (!empty) {
    let finded = false
    for (const key in count) {
      const val = count[key]

      if (val > 0) {
        count[key]--
        result.push(Number(key))
        finded = true
      }
    }
    if (!finded) {
      empty = true
    }
  }
  return result
}

console.log(rearrangeArray(nums))
