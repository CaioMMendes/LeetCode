const s = "(1+(2*3)+((8)/4))+1"

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s: string) {
  let result = 0
  let count = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++
    }
    if (s[i] === ")") {
      count--
    }
    if (result < count) result = count
  }

  return result
}

console.log(maxDepth)
