const str1 = "ABABAB",
  str2 = "ABAB"

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1: string, str2: string) {
  const gcd = (str1g, str2g) => {
    return str2g === 0 ? str1g : gcd(str2g, str1g % str2g)
  }

  if (str1 + str2 !== str2 + str1) {
    return ""
  }

  const divisor = gcd(str1.length, str2.length)

  return str1.slice(0, divisor)
}

console.log(gcdOfStrings(str1, str2))
