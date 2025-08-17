/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function <T extends any[], R>(
  fn: (...args: T) => Promise<R>,
  t: number
) {
  return async (...args: T): Promise<R> => {
    return Promise.race([
      fn(...args), // Chama a função original com os argumentos corretos
      new Promise<never>((_, reject) =>
        setTimeout(() => reject("Time Limit Exceeded"), t)
      ),
    ])
  }
}
/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
