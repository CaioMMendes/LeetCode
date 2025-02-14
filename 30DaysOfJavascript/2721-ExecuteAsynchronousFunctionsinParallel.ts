const functions = [
  () => new Promise((resolve) => setTimeout(() => resolve(1), 200)),
  () =>
    new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100)),
]

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions: (() => Promise<unknown>)[]) {
  const funcs = functions.map((func) => func())

  return Promise.all(funcs)
}

const promise = promiseAll([() => new Promise((res) => res(42))])
promise.then(console.log) // [42]
