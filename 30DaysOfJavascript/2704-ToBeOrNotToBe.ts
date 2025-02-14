const val = 5,
  compareValue = 5

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe(compareValue) {
      if (val === compareValue) {
        return true
      } else {
        throw "Not Equal"
      }
    },

    notToBe(compareValue) {
      if (val === compareValue) {
        throw "Equal"
      } else {
        return true
      }
    },
  }
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

console.log(expect(val).toBe(compareValue))
