const s = "1112"

/**
 * @param {string} s
 * @return {string}
 */
var largestEven = function (s: string) {
  let last = -1

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "2") last = i
  }

  return last === -1 ? "" : s.slice(0, last + 1)
}

console.log(largestEven(s))
