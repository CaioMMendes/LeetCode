const n = 3

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n: number) {
  const result: string[] = []

  getPossibilities("")

  function getPossibilities(str: string) {
    if (str.length > n * 2) return

    if (str.length === n * 2) result.push(str)

    getPossibilities(`${str}(`)
    getPossibilities(`${str})`)
  }

  return result.filter((val) => checkWellFormed(val))

  function checkWellFormed(str: string) {
    let left = 0

    for (const val of str) {
      if (val === "(") {
        left++
      } else {
        left--
      }

      if (left < 0) return false
    }

    if (left > 0) return false

    return true
  }
}

console.log(generateParenthesis(n))
