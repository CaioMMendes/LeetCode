//@ts-nocheck

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.lasts = new Set()
  this.map = new Map()
  this.capacity = capacity
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    this.lasts.delete(key)
    this.lasts.add(key)
  }
  if (this.map.has(key)) return this.map.get(key)

  return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.size === this.capacity && !this.map.has(key)) {
    const firstKey = [...this.lasts][0]
    this.lasts.delete(firstKey)
    this.map.delete(firstKey)
    this.map.set(key, value)
  } else {
    this.map.set(key, value)
  }
  this.lasts.delete(key)
  this.lasts.add(key)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
