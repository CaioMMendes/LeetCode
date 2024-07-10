const logs = ["d1/", "d2/", "../", "d21/", "./"]

/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs: string[]) {
  const length = logs.length
  let result = 0

  for (let i = 0; i < length; i++) {
    const element = logs[i]
    if (element === "../" && result > 0) {
      result--
    } else if (element === "./" || element === "../") {
      continue
    } else {
      result++
    }
  }

  return result
}

console.log(minOperations(logs))
