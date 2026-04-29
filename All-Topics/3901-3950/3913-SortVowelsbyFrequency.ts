//@ts-nocheck

const s = "leetcode"

/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s: string) {
  const vowels: Record<string, number> = {
    "a": 0,
    "e": 0,
    "i": 0,
    "o": 0,
    "u": 0,
  }
  s = s.split("")
  const vowelsSet = new Set(["a", "e", "i", "o", "u"])

  for (const val of s) {
    if (!vowelsSet.has(val)) continue
    vowels[val]++
  }

  const arr: number[][] = []

  for (const key in vowels) {
    if (vowels[key] > 0) {
      arr.push([key, vowels[key]])
    }
  }

  let curr = 0
  const firstIndex: Record<string, number> = {
    "a": -1,
    "e": -1,
    "i": -1,
    "o": -1,
    "u": -1,
  }
  for (const val of vowelsSet) {
    firstIndex[val] = s.indexOf(val)
  }

  arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return firstIndex[a[0]] - firstIndex[b[0]]
    }

    return b[1] - a[1]
  })

  for (let i = 0; i < s.length; i++) {
    if (!vowelsSet.has(s[i])) continue
    if (arr[curr][1] < 1) curr++
    s[i] = arr[curr][0]
    arr[curr][1]--
  }

  return s.join("")
}

console.log(sortVowels(s))
