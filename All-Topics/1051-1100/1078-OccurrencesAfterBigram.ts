const text = "alice is a good girl she is a good student",
  first = "a",
  second = "good"

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text: string, first: string, second: string) {
  const splited = text.split(" ")
  const result = []

  for (let i = 0; i < splited.length - 2; i++) {
    if (splited[i] === first && splited[i + 1] === second) {
      result.push(splited[i + 2])
    }
  }

  return result
}

console.log(findOcurrences(text, first, second))
