const nums = [20, 10, 30, 30]

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueFreq = function (nums: number[]) {
  const frequence = new Map<number, number>()

  for (const val of nums) {
    if (frequence.get(val)) {
      frequence.set(val, frequence.get(val) ?? 0 + 1)
    } else {
      frequence.set(val, 1)
    }
  }

  const frequenceCount: Record<string, number> = {}

  for (const [key, val] of frequence) {
    if (frequenceCount[val]) {
      frequenceCount[val]++
    } else {
      frequenceCount[val] = 1
    }
  }

  for (const [key, val] of frequence) {
    if (frequenceCount[val] === 1) return key
  }

  return -1
}

console.log(firstUniqueFreq(nums))
