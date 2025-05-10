const s = "leetcode",
  p = "ee*e"

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var hasMatch = function (s: string, p: string) {
  const escapedPattern = p.replace(/([.+?^${}()|[\]\\])/g, "\\$1")
  const regexPattern = escapedPattern.replace("*", ".*") // converte o * para ".*"

  // Agora o padrão deve aparecer em qualquer lugar de s (substring), então usamos um novo RegExp
  const regex = new RegExp(regexPattern)

  return regex.test(s)
}

console.log(hasMatch(s, p))
