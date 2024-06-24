const paragraph = "a, a, a, a, b,b,b,c, c",
  banned = ["a"]

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph: string, banned: string[]) {
  const splited = paragraph
    .toLowerCase()
    .split(/[!?'";.,\s]/)
    .filter(Boolean)
  const count = {}

  for (const string of splited) {
    if (count[string]) {
      count[string]++
    } else {
      count[string] = 1
    }
  }
  let result = ""
  let resultCount = 0

  for (const key in count) {
    if (banned.some((string) => string === key)) {
      continue
    }

    if (count[key] >= resultCount) {
      resultCount = count[key]
      result = key
    }
  }
  return result
}

console.log(mostCommonWord(paragraph, banned))
