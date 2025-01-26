//@ts-nocheck

var RecentCounter = function () {
  this.time = 0
  this.set = new Set()
}

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.set.add(t)
  const values = [...this.set]

  for (const val of values) {
    if (val < t - 3000) {
      this.set.delete(val)
    }
  }

  return this.set.size
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
