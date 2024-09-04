/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn: (any: any) => any) {
  const output: Record<any, any> = {}

  this.forEach((value) => {
    const result = fn(value)
    if (output[result]) {
      output[result].push(value)
    } else {
      output[result] = [value]
    }
  })

  return output
}

console.log([1, 2, 3].groupBy(String)) // {"1":[1],"2":[2],"3":[3]}
