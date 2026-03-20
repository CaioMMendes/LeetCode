const n = "27346209830709182346"

/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n: string) {
  let max = 0

  for (const val of n) {
    if (Number(val) > max) max = Number(val)

    if (max === 9) return 9
  }

  return max
}

console.log(minPartitions(n))
