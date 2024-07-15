const n = 1,
  start = 7
//7

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n: number, start: number) {
  return Array.from({ length: n }).reduce((acc: number, cur, i) => {
    return (acc = acc ^ (start + i * 2))
  }, 0)
}

console.log(xorOperation(n, start))
