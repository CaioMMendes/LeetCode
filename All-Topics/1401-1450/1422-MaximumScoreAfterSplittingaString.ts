const s = "011101"

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s: string) {
  let max = 0
  const regexZero = new RegExp("0", "g")
  const regexOne = new RegExp("1", "g")
  for (let i = 1; i < s.length; i++) {
    const firstPart = s.slice(0, i)
    const secondPart = s.slice(i, s.length)
    const sum = Number(
      (firstPart.match(regexZero)?.length ?? 0) +
        (secondPart?.match(regexOne)?.length ?? 0)
    )
    if (sum > max) max = sum
  }
  return max
}

console.log(maxScore(s))
