const nums = [4, 14, 2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums: number[]) {
  let result = 0
  let max = 0
  let list = []

  for (const val of nums) {
    const binary = val.toString(2)
    list.push(binary)
    if (binary.length > max) max = binary.length
  }

  list = list.map((val) => val.padStart(max, "0"))

  for (let i = 0; i < max; i++) {
    let count0 = 0
    let count1 = 0
    for (const val of list) {
      if (val[i] === "0") {
        count0++
      } else {
        count1++
      }
    }
    result += count0 * count1
  }

  return result
}

console.log(totalHammingDistance(nums))
