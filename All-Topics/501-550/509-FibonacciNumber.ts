const n = 5

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n: number) {
  let previous = 0
  let current = 1
  if (n === 0) return previous
  if (n === 1) return current

  for (let i = 0; i < n - 1; i++) {
    const temp = previous + current
    previous = current
    current = temp
  }

  return current
}

console.log(fib)
