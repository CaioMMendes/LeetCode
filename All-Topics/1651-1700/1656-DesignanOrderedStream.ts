// @ts-nocheck

/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.ptr = 1

  this.map = new Map()
}

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.map.set(idKey, value)

  if (this.ptr !== idKey) {
    return []
  }

  const temp = [value]
  while (this.map.has(this.ptr)) {
    this.ptr++
  }
  let count = idKey + 1
  while (this.map.has(count)) {
    temp.push(this.map.get(count))
    count++
  }

  return temp
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
