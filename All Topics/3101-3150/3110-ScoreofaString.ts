const s = "hello"

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s: string) {
  const sLength = s.length
  let sum = 0

  for (let index = 0; index < sLength - 1; index++) {
    sum += Math.abs(s.charCodeAt(index) - s.charCodeAt(index + 1))
  }
  return sum
}

console.log(scoreOfString(s))
