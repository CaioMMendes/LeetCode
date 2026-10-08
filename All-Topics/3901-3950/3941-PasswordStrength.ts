const password = "aA1!"

/**
 * @param {string} password
 * @return {number}
 */
var passwordStrength = function (password: string) {
  const upper = new Set([
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
  ])

  const lower = new Set([
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
  ])

  const numbers = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])

  const special = new Set(["!", "@", "#", "$"])

  const one = new Set()
  const two = new Set()
  const three = new Set()
  const five = new Set()

  for (const val of password) {
    if (lower.has(val)) {
      one.add(val)
    } else if (upper.has(val)) {
      two.add(val)
    } else if (numbers.has(val)) {
      three.add(val)
    } else {
      five.add(val)
    }
  }

  let result = 0

  result += one.size
  result += two.size * 2
  result += three.size * 3
  result += five.size * 5

  return result
}

console.log(passwordStrength(password))
