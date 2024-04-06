// const s = "abBAcC"
const s = "fVETGEeEyYeEegtevFi"

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s: string) {
  const letters = {
    "a": "A",
    "b": "B",
    "c": "C",
    "d": "D",
    "e": "E",
    "f": "F",
    "g": "G",
    "h": "H",
    "i": "I",
    "j": "J",
    "k": "K",
    "l": "L",
    "m": "M",
    "n": "N",
    "o": "O",
    "p": "P",
    "q": "Q",
    "r": "R",
    "s": "S",
    "t": "T",
    "u": "U",
    "v": "V",
    "w": "W",
    "x": "X",
    "y": "Y",
    "z": "Z",
  }
  const splited = s.split("")

  for (let index = 0; index < splited.length - 1; index++) {
    const element = splited[index]
    const nextElement = splited[index + 1]

    if (letters[element] === nextElement || letters[nextElement] === element) {
      splited.splice(index, 2)

      index = -1
    }
  }
  return splited.join("")
}

console.log(makeGood(s))
