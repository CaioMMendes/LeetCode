const arr = [{ "x": 1 }, { "x": 0 }, { "x": -1 }],
  fn = (d) => d.x

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr: any[], fn: any) {
  return arr.sort((a, b) => fn(a) - fn(b))
}

console.log(sortBy(arr, fn))
