const n = 25

/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function (n: number) {
  const reversed = String(n).split("").reverse().join("")

  return Math.abs(n - Number(reversed))
}

console.log(mirrorDistance(n))
