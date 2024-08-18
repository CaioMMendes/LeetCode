const n = 5

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n: number) {
  const string = n.toString(2)
  const regex = /^(?!.*(\d)\1)(1(?!1)|0(?!0))*10?$|(?!.*(\d)\1)^1$/
  return regex.test(string)
}

console.log(hasAlternatingBits)
