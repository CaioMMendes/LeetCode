const s = "(()())(())"

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s: string) {
  const indexes = []

  let init = 0
  let count = 1

  for (let i = 1; i < s.length; i++) {
    if (s[i] === ")") {
      count--
      if (count === 0) {
        indexes.push([init, i])
        init = i + 1
        i++
        count = 1
      }
    } else {
      count++
    }
  }

  const map = indexes.map((val) => {
    return s.slice(val[0] + 1, val[1])
  })

  return map.join("")
}

console.log(removeOuterParentheses(s))
