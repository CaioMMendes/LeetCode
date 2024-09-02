const t = 50,
  calls = [
    { "t": 50, inputs: [1] },
    { "t": 75, inputs: [2] },
  ]

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function <T extends any[]>(fn: (...args: T) => any, t: number) {
  let timeoutId: any

  return function (...args: T) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      fn(...args)
      timeoutId = null // Reseta o timeoutId após a execução
    }, t)
  }
}

const log = debounce(console.log, 100)
log("Hello") // cancelled
log("Hello") // cancelled
log("Hello") // Logged at t=100ms
