const s = "l|*e*et|c**o|*de|as"

/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s: string) {
  return s.split(/\|/g).reduce((acc, cur, index) => {
    if (index % 2 !== 0) return acc

    const matches = cur?.match(/\*/g)?.length ?? 0
    return acc + matches
  }, 0)
}

console.log(countAsterisks(s))
