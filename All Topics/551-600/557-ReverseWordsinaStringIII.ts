const s = "Let's take LeetCode contest"

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s: string) {
  return s
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ")
}

console.log(reverseWords(s))
