const n = 34,
  k = 6

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n: number, k: number) {
  const converted = n.toString(k)
  let result = 0
  for (let i = 0; i < converted.length; i++) {
    result += Number(converted[i])
  }
  return result
}

console.log(sumBase(n, k))
