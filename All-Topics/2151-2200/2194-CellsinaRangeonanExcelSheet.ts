const s = "K1:L2"

/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s: string) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]
  const result = []

  const numberS1 = Number(s[1])
  const numberS4 = Number(s[4])

  let currentNumber = numberS1
  let currentLetterIndex = alphabet.indexOf(s[0])
  const indexFinish = alphabet.indexOf(s[3])

  while (
    currentLetterIndex < indexFinish ||
    (currentLetterIndex === indexFinish && currentNumber <= numberS4)
  ) {
    result.push(`${alphabet[currentLetterIndex]}${currentNumber}`)

    if (currentNumber === numberS4) {
      currentNumber = numberS1
      currentLetterIndex++
    } else {
      currentNumber++
    }
  }

  return result
}

console.log(cellsInRange(s))
