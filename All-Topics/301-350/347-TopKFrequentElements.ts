const nums = [1, 1, 1, 2, 2, 3],
  k = 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums: number[], k: number) {
  const count: Record<string, number> = {}

  for (const val of nums) {
    if (count[val]) {
      count[val]++
    } else {
      count[val] = 1
    }
  }

  const array: any = []

  for (const key in count) {
    array.push([key, count[key]])
  }

  const sorted = array.sort((a: number[], b: number[]) => b[1] - a[1])

  return sorted.map((val: string) => Number(val[0])).splice(0, k)
}

console.log(topKFrequent(nums, k))
