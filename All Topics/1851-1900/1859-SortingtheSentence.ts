const s = "is2 sentence4 This1 a3"

type ResultType = RegExpMatchArray | null

/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s: string) {
  const stringRegex = /[a-zA-z]+/g
  const digitRegex = /\d+/g

  const splited = s.split(" ")
  const splitedLength = splited.length
  const result: ResultType[] = Array.from({
    length: splitedLength,
  })

  for (let i = 0; i < splitedLength; i++) {
    const string = splited[i].match(stringRegex)
    const digit = splited[i].match(digitRegex)
    console.log(string)

    if (digit) {
      result[(digit as any) - 1] = string
    }
  }

  return result.join(" ")
}

console.log(sortSentence(s))
