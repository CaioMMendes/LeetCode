const s = ")ebc#da@f("

/**
 * @param {string} s
 * @return {string}
 */
var reverseByType = function (s: string) {
  const letterRegex = new RegExp("[a-z]", "g")
  const simbolRegex = new RegExp("[^a-z]", "g")

  const map = s.split("").map((val) => /[a-z]/.test(val))

  let letterCount = 0
  let simbolCount = 0
  let result = ""

  const simbols = s.match(simbolRegex)?.reverse()
  const letters = s.match(letterRegex)?.reverse()

  for (const val of map) {
    if (val) {
      result += letters?.[letterCount]
      letterCount++
    } else {
      result += simbols?.[simbolCount]
      simbolCount++
    }
  }

  return result
}

console.log(reverseByType(s))
