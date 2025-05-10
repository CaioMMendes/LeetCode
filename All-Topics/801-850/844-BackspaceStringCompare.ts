const s = "ab#c",
  t = "ad#c"

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s: string, t: string) {
  while (s.match(/.(#)/)) {
    s = s.replace(/.(#)/, "")
  }
  while (t.match(/.(#)/)) {
    t = t.replace(/.(#)/, "")
  }
  return s.replace(/#/, "") === t.replace(/#/, "")
}

console.log(backspaceCompare(s, t))
