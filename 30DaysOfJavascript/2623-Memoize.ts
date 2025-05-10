const fnName = "sum",
  actions = ["call", "call", "getCallCount", "call", "getCallCount"],
  values = [[2, 2], [2, 2], [], [1, 2], []]

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const map = new Map<string, ReturnType<T>>()
  return function (...args: Parameters<T>): ReturnType<T> {
    const stringArgs = String(args)
    if (map.has(stringArgs)) {
      return map.get(stringArgs) as ReturnType<T>
    }

    const result = fn(...args)
    map.set(stringArgs, result)
    return result
  } as T
}

let callCount = 0
const memoizedFn = memoize(function (a: any, b: any) {
  callCount += 1
  return a + b
})
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
console.log(callCount) // 1
