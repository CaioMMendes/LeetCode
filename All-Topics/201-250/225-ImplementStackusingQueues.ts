//@ts-nocheck

class Node {
  val = 0
  next = null
  constructor(val: any, next = null) {
    this.val = val
    this.next = next
  }
}

var MyStack = function (this: any) {
  this.stack = null
}

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x: number) {
  if (this.stack === null) {
    this.stack = new Node(x)
    return null
  }
  let currentPush = this.stack
  while (currentPush?.next !== null) {
    currentPush = currentPush.next
  }
  currentPush.next = new Node(x)
}

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.stack === null) return null
  let currentPop = this.stack
  while (currentPop !== null) {
    if (currentPop?.next === null) {
      const tempVal = currentPop.val
      this.stack = null
      return tempVal
    }
    if (currentPop?.next?.next === null) {
      const tempVal = currentPop.next.val
      currentPop.next = null
      return tempVal
    }
    currentPop = currentPop.next
  }
}

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  let currentTop = this.stack
  while (currentTop?.next !== null) {
    currentTop = currentTop.next
  }
  return currentTop.val
}

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.stack === null
}

var obj = new MyStack()
obj.push(2)
var param_2 = obj.pop()
var param_3 = obj.top()
var param_4 = obj.empty()
