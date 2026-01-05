const s = "abcd",
  k = 2

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function (s: string, k: number) {
  const splited = s.split("")
  let spliced = splited.splice(0, k).reverse()
  return spliced.concat(splited).join("")
}

console.log(reversePrefix(s, k))
