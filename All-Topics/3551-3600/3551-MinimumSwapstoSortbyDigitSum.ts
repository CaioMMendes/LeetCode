const nums = [37, 100]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums: number[]) {
  const sums = nums.map((val) => {
    const string = String(val)
    let sum = 0

    for (const digit of string) {
      sum += Number(digit)
    }

    return [val, sum]
  })

  sums.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0]
    }

    return a[1] - b[1]
  })

  const startIndex = new Map()
  const endIndex = new Map()
  const endValIndex = new Map()

  for (let i = 0; i < nums.length; i++) {
    startIndex.set(nums[i], i)
  }

  for (let i = 0; i < sums.length; i++) {
    endIndex.set(sums[i][0], i)
    endValIndex.set(i, sums[i][0])
  }

  let result = 0

  for (const [key] of startIndex) {
    while (startIndex.get(key) !== endIndex.get(key)) {
      const val = startIndex.get(key)
      const valIndex = endValIndex.get(val)
      const p = startIndex.get(valIndex) // posição antiga de valIndex
      startIndex.set(valIndex, val)
      startIndex.set(key, p)
      result++
    }
  }

  return result
}

console.log(minSwaps(nums))
