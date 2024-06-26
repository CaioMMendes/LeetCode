const s = "tr"

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s: string) {
  const half = s.length / 2
  const regex = /[aeiouAEIOU]/g
  const first = s.slice(0, half)
  const second = s.slice(half, s.length)

  return first.match(regex)?.length === second.match(regex)?.length
}

console.log(halvesAreAlike(s))
