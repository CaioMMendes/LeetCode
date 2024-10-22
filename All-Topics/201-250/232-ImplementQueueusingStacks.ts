var MyQueue = function (this: { queue: number[] }) {
  this.queue = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x: number) {
  return this.queue.push(x)
}

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.queue.shift()
}

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.queue[0]
}

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (this.queue.length === 0) {
    return true
  }
  return false
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
