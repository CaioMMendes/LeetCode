const s1 = "caa",
  s2 = "aaz"

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1: string, s2: string) {
  if (s1.length !== s2.length) return false

  let firstIndex = -1
  let secondIndex = -1
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (firstIndex === -1) {
        firstIndex = i
      } else {
        secondIndex = i
        break
      }
    }
  }

  const newString =
    s1.slice(0, firstIndex) +
    s1[secondIndex] +
    s1.slice(firstIndex + 1, secondIndex) +
    s1[firstIndex] +
    s1.slice(secondIndex + 1, s1.length)

  if (firstIndex === -1) return true
  if (secondIndex === -1) return false
  if (s2 !== newString) return false

  return true
}

console.log(areAlmostEqual(s1, s2))
