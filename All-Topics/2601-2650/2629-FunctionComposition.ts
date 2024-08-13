const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x],
  x = 4

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  const numberOfFunctions = functions.length - 1

  return (value) => {
    let result = value

    for (let i = numberOfFunctions; 0 <= i; i--) {
      result = functions[i](result)
    }
    return result
  }
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

console.log(compose(functions)(x))
