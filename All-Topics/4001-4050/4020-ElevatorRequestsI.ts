const n = 5,
  requests = [2, 1, 4, 3]

/**
 * @param {number} n
 * @param {number[]} requests
 * @return {number}
 */
var elevatorRequests = function (n: number, requests: number[]) {
  let current = 0
  let total = 0

  for (const val of requests) {
    total += Math.abs(val - current)
    current = val
  }

  return total
}

console.log(elevatorRequests(n, requests))
