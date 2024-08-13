const digits = "23"
console.log("-------------------------")
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits: string) {
  const splited = digits.split("")

  const digitsLetters = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  }

  console.log(digits)
  const splitedLength = splited.length

  const result: string[] = []

  if (splitedLength === 0) {
    return result
  }

  for (
    let i = 0;
    i <
    (splitedLength < 4 ? 1 : digitsLetters[splited[splitedLength - 4]].length);
    i++
  ) {
    const elementI =
      splitedLength >= 4 && digitsLetters[splited[splitedLength - 4]][i]

    for (
      let j = 0;
      j <
      (splitedLength < 3
        ? 1
        : digitsLetters[splited[splitedLength - 3]].length);
      j++
    ) {
      const elementJ =
        splitedLength >= 3 && digitsLetters[splited[splitedLength - 3]][j]

      for (
        let k = 0;
        k <
        (splitedLength < 2
          ? 1
          : digitsLetters[splited[splitedLength - 2]].length);
        k++
      ) {
        const elementK =
          splitedLength >= 2 && digitsLetters[splited[splitedLength - 2]][k]

        for (
          let w = 0;
          w <
          (splitedLength < 1
            ? 1
            : digitsLetters[splited[splitedLength - 1]].length);
          w++
        ) {
          const elementW =
            splitedLength >= 1 && digitsLetters[splited[splitedLength - 1]][w]

          result.push(
            `${elementI ? elementI : ""}${elementJ ? elementJ : ""}${
              elementK ? elementK : ""
            }${elementW ? elementW : ""}`
          )
        }
      }
    }
  }
  return result
}

console.log(letterCombinations(digits))
