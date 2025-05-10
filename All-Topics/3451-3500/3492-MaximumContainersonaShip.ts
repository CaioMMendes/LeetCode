const n = 2,
  w = 3,
  maxWeight = 15

/**
 * @param {number} n
 * @param {number} w
 * @param {number} maxWeight
 * @return {number}
 */
var maxContainers = function (n: number, w: number, maxWeight: number) {
  const one = n * n * w
  const two = Math.floor(maxWeight / w) * w

  const min = Math.min(two, one)
  return min / w
}

console.log(maxContainers(n, w, maxWeight))
