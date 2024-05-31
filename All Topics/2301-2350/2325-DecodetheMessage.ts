const key = "the quick brown fox jumps over the lazy dog",
  message = "vkbs bs t suepuv"

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key: string, message: string) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]
  const keyLength = key.length
  const transform = {}
  let count = 0
  let result = ""
  const messageLength = message.length

  for (let i = 0; i < keyLength; i++) {
    const element = key[i]
    if (element === " ") continue
    if (!transform[element]) {
      transform[element] = alphabet[count]
      count++
    }
    if (count >= 26) break
  }

  for (let i = 0; i < messageLength; i++) {
    if (message[i] === " ") {
      result += " "
    } else {
      result += transform[message[i]]
    }
  }

  return result
}

console.log(decodeMessage(key, message))
