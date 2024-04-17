const s = "anagrai",
  t = "nagarat"

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s: string, t: string) {
  const length = s.length
  let sCount = {}
  let tCount = {}
  if (length !== t.length) {
    return false
  }

  for (let index = 0; index < length; index++) {
    const elementS = s[index]
    const elementT = t[index]

    if (sCount[elementS]) {
      sCount = { ...sCount, [elementS]: sCount[elementS] + 1 }
    } else {
      sCount = { ...sCount, [elementS]: 1 }
    }
    if (tCount[elementT]) {
      tCount = { ...tCount, [elementT]: tCount[elementT] + 1 }
    } else {
      tCount = { ...tCount, [elementT]: 1 }
    }
  }

  for (let key in sCount) {
    if (sCount[key] !== tCount[key]) {
      return false
    }
  }

  return true
}

console.log(isAnagram(s, t))
