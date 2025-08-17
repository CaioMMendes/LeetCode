const w = [1, 3]

/**
 * @param {number[]} w
 */
var Solution = function (this: any, w: number[]) {
  this.sum = w.reduce((acc, cur) => acc + cur, 0)
  this.percentageArray = []

  for (let i = 0; i < w.length; i++) {
    if (i === 0) {
      this.percentageArray.push(w[i] / this.sum)
    } else {
      this.percentageArray.push(w[i] / this.sum + this.percentageArray[i - 1])
    }
  }
}

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const randomNumber = Math.random()

  for (let i = 0; i < this.percentageArray.length; i++) {
    if (this.percentageArray[i] >= randomNumber) return i
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

console.log(Solution(w))
