const words = ["hello", "i", "am", "leetcode", "hello"],
  target = "hello",
  startIndex = 1

/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function (
  words: string[],
  target: string,
  startIndex: number
) {
  const indexes = []
  let result = -1

  for (let i = 0; i < words.length; i++) {
    if (words[i] === target) indexes.push(i)
  }

  for (const val of indexes) {
    const min = Math.min(
      Math.abs(startIndex - val),
      words.length -
        1 -
        Math.max(val, startIndex) +
        Math.min(val, startIndex) +
        1
    )
    if (result === -1 || min < result) result = min
  }

  return result
}

console.log(closetTarget(words, target, startIndex))
