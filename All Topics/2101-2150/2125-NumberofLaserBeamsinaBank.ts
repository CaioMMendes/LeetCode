const bank = ["011001", "000000", "010100", "001000"]

/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank: string[]) {
  const rows = bank.length
  const count = {}
  let result = 0

  for (let i = 0; i < rows; i++) {
    const numberOfOnes = bank[i].replace(/[0]/g, "").length
    if (numberOfOnes > 0) {
      count[i] = numberOfOnes
    }
  }

  const keys = Object.keys(count)
  const keysLength = keys.length

  for (let index = 1; index < keysLength; index++) {
    result += count[keys[index]] * count[keys[index - 1]]
  }

  return result
}

console.log(numberOfBeams(bank))
