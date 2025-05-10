var MyHashSet = function (this: { array: number[] }) {
  this.array = []
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key: number) {
  if (this.contains(key)) return this.array
  this.array.push(key)
  return this.array
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key: number) {
  this.array = this.array.filter((val: number) => val !== key)
  return this.array
}

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key: number) {
  return this.array.some((val: number) => val === key)
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
