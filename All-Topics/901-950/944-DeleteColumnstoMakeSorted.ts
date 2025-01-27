const strs = ["cba", "daf", "ghi"]

/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs: string[]) {
  let result = 0

  const columns = strs[0].length
  const rows = strs.length

  for (let i = 0; i < columns; i++) {
    let error = false

    for (let j = 1; j < rows; j++) {
      if (strs[j][i].localeCompare(strs[j - 1][i]) === -1) {
        error = true
        break
      }
    }
    if (error) result++
  }

  return result
}

console.log(minDeletionSize(strs))
