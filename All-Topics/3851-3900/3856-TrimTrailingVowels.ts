const s = "idea"

/**
 * @param {string} s
 * @return {string}
 */
var trimTrailingVowels = function (s: string | string[]) {
  let result = ""
  const vowels = new Set(["a", "e", "i", "o", "u"])

  s = (s as string).split("").reverse()
  let count = 0

  for (const val of s) {
    if (vowels.has(val)) {
      count++
    } else {
      break
    }
  }

  s = s.reverse().join("")

  for (let i = 0; i < s.length - count; i++) {
    result += s[i]
  }

  return result
}

console.log(trimTrailingVowels(s))
