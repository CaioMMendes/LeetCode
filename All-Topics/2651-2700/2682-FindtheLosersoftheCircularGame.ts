const n = 5,
  k = 2

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function (n: number, k: number) {
  const received = new Set([1])
  let current = ((1 + k - 1) % n) + 1
  let count = 2

  while (!received.has(current)) {
    received.add(current)
    current = ((current + count * k - 1) % n) + 1
    count++
  }

  let result = []
  for (let i = 1; i <= n; i++) {
    if (!received.has(i)) result.push(i)
  }

  return result
}

console.log(circularGameLosers(n, k))
