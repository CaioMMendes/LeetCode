const logs = [
  "dig1 8 1 5 1",
  "let1 art can",
  "dig2 3 6",
  "let2 own kit dig",
  "let3 art zero",
]

/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs: string[]) {
  let letter = []
  const digit = []
  const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

  for (const val of logs) {
    for (let i = 1; i < val.length; i++) {
      if (val[i - 1] === " ") {
        if (digits.some((letter) => letter === val[i])) {
          digit.push(val)
        } else {
          letter.push([val, val.slice(i, val.length)])
        }
        break
      }
    }
  }

  letter.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0].localeCompare(b[0])
    }
    return a[1].localeCompare(b[1])
  })
  letter = letter.map((val) => val[0])

  return letter.concat(digit)
}

console.log(reorderLogFiles(logs))
