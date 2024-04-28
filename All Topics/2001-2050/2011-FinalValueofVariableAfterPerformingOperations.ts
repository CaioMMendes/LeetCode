const operations = ["--X", "X++", "X++"]

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations: string[]) {
  let result = 0

  operations.forEach((operation) => {
    ;(operation === "--X" || operation === "X--") && result--
    ;(operation === "++X" || operation === "X++") && result++
  })

  return result
}

console.log(finalValueAfterOperations(operations))
