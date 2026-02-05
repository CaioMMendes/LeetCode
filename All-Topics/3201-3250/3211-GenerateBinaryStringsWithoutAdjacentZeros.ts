const n = 3

/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n: number) {
  const binaries: string[] = []
  generateBinaries("", 0)

  return binaries.filter((str) => {
    for (let i = 1; i < str.length; i++) {
      if (str[i] === "0" && str[i - 1] === "0") return false
    }

    return true
  })

  function generateBinaries(string: string, length: number) {
    if (length > n) return
    if (string.length === n) binaries.push(string)
    generateBinaries(`${string}0`, length + 1)
    generateBinaries(`${string}1`, length + 1)
  }
}

console.log(validStrings(n))
