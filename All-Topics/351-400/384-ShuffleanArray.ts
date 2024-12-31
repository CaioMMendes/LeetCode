/**
 * @param {number[]} nums
 */
var Solution = function (this: any, nums: number[]) {
  this.array = nums
}

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.array
}

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const newArray = this.array.slice()
  const result = []
  while (newArray.length > 0) {
    const randomNumber =
      Math.floor(Math.random() * (newArray.length - 1 - 0 + 1)) + 0 //10 (Math.random()*(max-min+1))+min
    const spliced = newArray.splice(randomNumber, 1)
    result.push(spliced[0])
  }
  return result
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
