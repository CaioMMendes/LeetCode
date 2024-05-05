const s = "Hello how are you Contestant",
  k = 4

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s: string, k: number) {
  return s.split(" ").splice(0, k).join(" ")
}

console.log(truncateSentence(s, k))
