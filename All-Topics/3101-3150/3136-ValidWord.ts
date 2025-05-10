const word = "234Adas"

/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word: string) {
  const length = word.length
  if (length < 3) return false
  if (!/^[a-zA-Z0-9]+$/.test(word)) return false
  if (!/[aeiouAEIOU]/.test(word)) return false
  if (!/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/.test(word)) return false
  return true
}

console.log(isValid(word))
