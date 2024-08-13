const text = "lloo"

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text: string) {
  const count = {
    "b": 0,
    "a": 0,
    "l": 0,
    "o": 0,
    "n": 0,
  }

  const textLength = text.length

  for (let index = 0; index < textLength; index++) {
    if (count[text[index]] !== undefined) {
      count[text[index]]++
    }
  }

  let result = 0

  while (true) {
    count["a"]--
    count["b"]--
    count["n"]--
    count["l"] -= 2
    count["o"] -= 2
    if (
      count["a"] >= 0 &&
      count["b"] >= 0 &&
      count["n"] >= 0 &&
      count["l"] >= 0 &&
      count["o"] >= 0
    ) {
      result++
    } else {
      break
    }
  }

  return result
}

console.log(maxNumberOfBalloons(text))
