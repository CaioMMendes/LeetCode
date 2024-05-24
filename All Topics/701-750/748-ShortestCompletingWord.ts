const licensePlate = "1s3 456",
  words = ["looks", "pest", "stew", "show"]

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate: string, words: string[]) {
  const alphabetArray = [
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
  const lowerCaseWord = licensePlate.toLowerCase()
  const countLicense = {}
  const licenseLength = licensePlate.length
  const result: string[] = []

  for (let i = 0; i < licenseLength; i++) {
    if (!alphabetArray.includes(lowerCaseWord[i])) continue
    if (countLicense[lowerCaseWord[i]]) {
      countLicense[lowerCaseWord[i]]++
    } else {
      countLicense[lowerCaseWord[i]] = 1
    }
  }

  const wordsLength = words.length
  for (let i = 0; i < wordsLength; i++) {
    let error = false
    let word = words[i]

    for (let key in countLicense) {
      const value = countLicense[key]
      for (let j = 0; j < value; j++) {
        const index = word.indexOf(key)
        if (index === -1) {
          error = true
          break
        }

        word = word.slice(0, index) + word.slice(index + 1)

        if (error === true) break
      }
    }

    if (error === true) continue

    result.push(words[i])
  }

  let shortest: string[] = []
  const resultLength = result.length

  for (let index = 0; index < resultLength; index++) {
    const element = result[index]

    if (index === 0) {
      shortest.push(element)
      continue
    }

    if (shortest[0].length > element.length) {
      shortest = [element]
      continue
    }

    if (shortest[0].length === element.length) {
      shortest.push(element)
    }
  }
  console.log(shortest)
  return shortest[0]
}

console.log(shortestCompletingWord(licensePlate, words))
