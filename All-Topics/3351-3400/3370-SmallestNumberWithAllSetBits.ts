const n = 5

/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function (n: number) {
  while (true) {
    const binary = n.toString(2)
    if (!binary.includes("0")) return n
    n++
  }
}

console.log(smallestNumber(n))
