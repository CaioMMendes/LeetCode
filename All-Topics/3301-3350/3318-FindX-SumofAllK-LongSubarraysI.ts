const nums = [1, 1, 2, 2, 3, 4, 2, 3],
  k = 6,
  x = 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function (nums: number[], k: number, x: number) {
  let result = []

  for (let i = 0; i <= nums.length - k; i++) {
    const count: Record<string, number> = {}

    for (let j = 0; j < k; j++) {
      const element = nums[i + j]
      if (count[element]) {
        count[element]++
      } else {
        count[element] = 1
      }
    }

    let keys: string[] | number[][] = Object.keys(count)

    keys = keys.map((key) => {
      return [Number(key), count[key]]
    })

    keys.sort((a, b) => {
      if (a[1] === b[1]) {
        return b[0] - a[0]
      }
      return b[1] - a[1]
    })

    let sum = 0

    for (let k = 0; k < x; k++) {
      if (k > keys.length - 1) break
      sum += keys?.[k]?.[0] * keys?.[k]?.[1]
    }

    result.push(sum)
  }

  return result
}

console.log(findXSum(nums, k, x))
