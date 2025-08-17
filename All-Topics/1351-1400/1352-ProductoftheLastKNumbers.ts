var ProductOfNumbers = function (this: { list: number[] }) {
  this.list = []
}

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num: number) {
  this.list.unshift(num)
  return this.list
}

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k: number) {
  let calc = 1
  for (let i = 0; i < k; i++) {
    calc *= this.list[i]
  }
  return calc
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
