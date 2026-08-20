//@ts-nocheck

var SmallestInfiniteSet = function () {
  this.current = 0

  this.set = {}
}

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  const set = this.set
  for (const key in set) {
    if (set[key]) {
      const number = Number(key)
      if (number === this.current) {
        set[key] = false
        return number
      } else if (number < this.current) {
        set[key] = false
        return number
      } else {
        this.current++
        return this.current
      }
    }
  }

  this.current++
  return this.current
}

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  if (num <= this.current) {
    this.set[num] = true
  }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
