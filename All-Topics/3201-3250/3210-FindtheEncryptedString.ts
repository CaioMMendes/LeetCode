const s = "dart",
  k = 3

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function (s: string, k: number) {
  let newString = ""
  const stringLength = s.length

  for (let i = 0; i < stringLength; i++) {
    newString += s[(i + k) % stringLength]
  }

  return newString
}

console.log(getEncryptedString(s, k))
