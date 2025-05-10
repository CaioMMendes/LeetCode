const s = "dfa12321afd"

/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s: string) {
  const replaced = s.replace(/\D/g, "")
  const set = new Set(replaced.split(""))

  const splited = [...set].map(Number).sort((a, b) => b - a)
  return splited[1] ?? -1
}

console.log(secondHighest(s))
