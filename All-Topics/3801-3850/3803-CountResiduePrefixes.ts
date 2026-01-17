const s = "abc"

/**
 * @param {string} s
 * @return {number}
 */
var residuePrefixes = function (s: string) {
  let result = 0

  for (let i = 1; i <= s.length; i++) {
    const slice = s.slice(0, i)

    const unique = new Set(slice.split("")).size

    if (slice.length % 3 === unique) result++
  }

  return result
}

console.log(residuePrefixes(s))
