const x = -123

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x: number) {
  let string: string | string[] = String(x).split("").reverse()
  let negative = false

  if (string[string.length - 1] === "-") {
    const pop = string.pop()
    negative = true
  }

  string = string.join("")

  let result = Number(string)
  if (negative) {
    result = -result
  }
  const limit = 2 ** 31

  if (result < -limit || result > limit - 1) {
    return 0
  }

  return result
}

console.log(reverse(x))
