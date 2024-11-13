const n = 10,
  t = 2

/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function (n: number, t: number) {
  while (true) {
    const string = String(n)
    const splited = string.split("")
    const sum = splited.reduce((acc, cur) => acc * Number(cur), 1)
    if (sum % t === 0) return n
    n++
  }
}

console.log(smallestNumber(n, t))
