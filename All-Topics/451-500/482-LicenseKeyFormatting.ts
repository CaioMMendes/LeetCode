// const s = "2-5g-3-J",
//   k = 2

const s = "5F3Z-2e-9-w",
  k = 4

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s: string, k: number) {
  let cleanedStr = s.replace(/-/g, "")

  const sLength = cleanedStr.length
  const firstPart = cleanedStr.length % k

  let result =
    cleanedStr.slice(0, firstPart) && cleanedStr.slice(0, firstPart) + "-"
  for (let i = firstPart; i < sLength; i += k) {
    result += cleanedStr.slice(i, i + k) + "-"
  }

  return result.slice(0, result.length - 1).toUpperCase()
}

console.log(licenseKeyFormatting(s, k))
