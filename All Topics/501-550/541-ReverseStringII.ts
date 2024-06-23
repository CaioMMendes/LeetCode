const s = "abcdefghlup",
  k = 2

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s: string, k: number) {
  const sLength = s.length
  let result = ""
  const splited = s.split("")

  for (let i = 0; i < sLength; i += 2 * k) {
    result +=
      splited.splice(0, k).reverse().join("") + splited.splice(0, k).join("")
  }

  return result
}

console.log(reverseStr(s, k))
