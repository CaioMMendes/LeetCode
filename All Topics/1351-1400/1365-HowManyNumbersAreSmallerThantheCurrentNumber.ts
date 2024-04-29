const nums = [8, 1, 2, 2, 3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums: number[]) {
  const count = {}

  nums.forEach((num) => {
    if (count[num]) {
      count[num]++
    } else {
      count[num] = 1
    }
  })

  const alreadySetted = {}

  return nums.map((num) => {
    if (alreadySetted[num]) {
      return alreadySetted[num]
    } else {
      let sum = 0
      for (let key in count) {
        if (key === String(num)) {
          // if (key == num) { //todo daria pra fazer sem ficar transformando em string
          return sum
        }
        sum += count[key]
      }
    }
  })
}

console.log(smallerNumbersThanCurrent(nums))
