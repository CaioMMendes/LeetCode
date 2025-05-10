const s = "3902"

/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s: string) {
  while (s.length > 2) {
    let newS = []
    for (let i = 1; i < s.length; i++) {
      const calc = (Number(s[i]) + Number(s[i - 1])) % 10
      newS.push(calc)
    }
    s = newS.map(String).join("")
  }

  return s[0] === s[1]
}

console.log(hasSameDigits(s))
