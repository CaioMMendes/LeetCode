const nums = [1, 2, 3, 4]

console.log("------------------------------------------")

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums: number[]) {
  let sets: number[][] = []
  if (nums.length === 0) {
    return [[]]
  } else {
    let subsetsCount = 2 ** nums.length
    for (let i = 0; i < subsetsCount; i++) {
      let subset = new Set()
      for (let j = 0; j < nums.length; j++) {
        if (getBit(i, j) == 1 && !subset.has(nums[j])) {
          subset.add(nums[j])
        }
      }
      if (i === 0) {
        sets.push([])
      } else {
        sets.push([...subset] as number[])
      }
    }
  }

  // console.log(sets)
  return sets
}
function getBit(num: number, bit: number) {
  let temp
  temp = 1 << bit
  temp = temp & num
  if (temp === 0) {
    return 0
  }
  return 1
}

console.log(subsets(nums))
