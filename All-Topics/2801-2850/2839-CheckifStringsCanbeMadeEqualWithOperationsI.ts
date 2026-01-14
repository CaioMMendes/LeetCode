const s1 = "abcd",
  s2 = "cdab"

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function (s1: string, s2: string) {
  const string1 = `${s1[2]}${s1[1]}${s1[0]}${s1[3]}`
  const string2 = `${s1[0]}${s1[3]}${s1[2]}${s1[1]}`
  const string3 = `${s2[2]}${s2[1]}${s2[0]}${s2[3]}`
  const string4 = `${s2[0]}${s2[3]}${s2[2]}${s2[1]}`

  const list1 = [s1, string1, string2]
  const list2 = [s2, string3, string4]

  for (const val of list1) {
    for (const val2 of list2) {
      if (val === val2) return true
    }
  }

  return false
}

console.log(canBeEqual(s1, s2))
