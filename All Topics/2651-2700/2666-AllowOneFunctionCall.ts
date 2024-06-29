/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let stop = 0

  return function (...args) {
    if (stop === 0) {
      stop = 1
      return fn(...args)
    }
  }
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

let fn = (a, b, c) => a + b + c
let onceFn = once(fn)

console.log(onceFn(1, 2, 3))
