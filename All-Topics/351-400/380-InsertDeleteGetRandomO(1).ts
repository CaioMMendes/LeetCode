//@ts-nocheck

var RandomizedSet = function () {
  this.set = new Set()
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  const has = this.set.has(val)
  this.set.add(val)
  return !has
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  const has = this.set.has(val)
  this.set.delete(val)
  return has
}

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.set.size)

  const iterator = this.set.values()

  for (let i = 0; i < randomIndex; i++) {
    iterator.next()
  }

  return iterator.next().value
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
