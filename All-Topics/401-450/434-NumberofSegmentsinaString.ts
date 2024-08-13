const s = ""

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s: string) {
  return s.split(" ").filter((element) => element !== "").length
}

console.log(countSegments(s))
