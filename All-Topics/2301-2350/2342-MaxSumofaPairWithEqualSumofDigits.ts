const nums = [18, 43, 36, 13, 7]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums: number[]) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    let tempNum = nums[i]
    let sum = 0

    while (tempNum > 0) {
      const remove = tempNum % 10
      sum += remove
      tempNum = Math.floor(tempNum / 10)
    }

    if (map.get(sum)) {
      const arr = map.get(sum)
      if (!arr?.[1]) {
        arr.push(nums[i])
        map.set(sum, arr)
      } else if (nums[i] > arr[0] || nums[i] > arr[1]) {
        if (arr[0] > arr[1]) {
          arr[1] = nums[i]
        } else {
          arr[0] = nums[i]
        }

        map.set(sum, arr)
      }
    } else {
      map.set(sum, [nums[i]])
    }
  }
  let max = -1
  for (let [key, val] of map) {
    const calc = val[0] + val?.[1]
    if (calc > max) {
      max = calc
    }
  }
  return max
}

console.log(maximumSum(nums))
