const nums = [1, 1, 1, 1]

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums: number[]) {
  const indexes = {}
  let result = 0

  nums.forEach((num, index) => {
    if (indexes[num]) {
      indexes[num] = [...indexes[num], index]
    } else {
      indexes[num] = [index]
    }
  })

  for (let key in indexes) {
    const length = indexes[key].length
    for (let j = 1; j < length; j++) {
      result += j
    }
  }

  return result
}

console.log(numIdenticalPairs(nums))
