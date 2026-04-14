const pattern = "IIIDIDDD"

/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern: string) {
  let result = ""

  getResult("", [])

  return result

  function getResult(str: string, arr: number[]) {
    if (result) return
    if (str.length === pattern.length + 1) {
      result = str
      return
    }

    for (let i = 1; i <= 9; i++) {
      if (str.length === 0) {
        getResult(`${str}${i}`, [...arr, i])
        continue
      }
      if (arr.some((val) => val === i)) continue

      const index = str.length - 1
      if (pattern[index] === "I" && i < Number(str[index])) continue
      if (pattern[index] === "D" && i > Number(str[index])) continue
      getResult(`${str}${i}`, [...arr, i])
    }
  }
}

console.log(smallestNumber(pattern))
