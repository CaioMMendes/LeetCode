const words = ["cd", "ac", "dc", "ca", "zz"]

/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words: string[]) {
  let result = 0

  const reversed = words.map((val) => {
    return [val.split("").reverse().join(""), false]
  })

  for (let i = 0; i < words.length; i++) {
    const elementI = words[i]
    if (reversed[i][1] === true) continue
    for (let j = 0; j < words.length; j++) {
      if (i === j) continue
      const elementJ = reversed[j]
      if (elementI === elementJ[0] && elementJ[1] === false) {
        result++
        elementJ[1] = true
        reversed[i][1] = true
        break
      }
    }
  }
  return result
}

console.log(maximumNumberOfStringPairs(words))
