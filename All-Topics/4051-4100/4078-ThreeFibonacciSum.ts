const n = 16

/**
 * @param {number} n
 * @return {boolean}
 */
var threeFibonacciSum = function (n: number) {
  const arr = [0, 1, 1]

  let sum = 0

  if (n === 2) return true

  while (sum < n) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    sum = arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3]
    if (sum === n) return true
  }

  return false
}

console.log(threeFibonacciSum)
