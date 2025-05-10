interface ICustomStack {
  stack: number[]
  maxSize: number
  push(x: number): void
  pop(): number
  increment(k: number, val: number): void
}

/**
 * @param {number} maxSize
 */
var CustomStack = function (this: ICustomStack, maxSize: number) {
  this.stack = []
  this.maxSize = maxSize
} as unknown as { new (maxSize: number): ICustomStack }

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x: number) {
  if (this.stack.length < this.maxSize) {
    this.stack.push(x)
  }

  return
}

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (this.stack.length === 0) {
    return -1
  }

  return this.stack.pop()
}

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k: number, val: number) {
  let init = 0
  while (init < k && init < this.stack.length) {
    this.stack[init] += val
    init++
  }
}

const maxSize = 3
const x = 2
const k = 2,
  val = 5
var obj = new CustomStack(maxSize)
obj.push(x)
var param_2 = obj.pop()
obj.increment(k, val)
