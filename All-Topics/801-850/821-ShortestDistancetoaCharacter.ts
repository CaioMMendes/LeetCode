const s = "loveleetcode",
  c = "e"

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s: string, c: string) {
  let current = 0
  let lastIndex = s.lastIndexOf(c)
  const splited = s.split("")
  const indexes: number[] = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      indexes.push(i)
    }
  }

  const indexesLength = indexes.length

  return splited.map((char: string, i: number) => {
    if (char === c) {
      lastIndex = indexes[current]
      if (current < indexesLength - 1) current++

      return 0
    }
    return Math.min(Math.abs(lastIndex - i), Math.abs(i - indexes[current]))
  })
}

console.log(shortestToChar(s, c))
