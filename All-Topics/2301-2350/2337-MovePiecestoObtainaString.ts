const start = "_L__R__R_",
  target = "L______RR"

/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start: string, target: string) {
  const startArray = []
  const startLength = start.length
  const targetArray = []
  const targetLength = target.length

  for (let i = 0; i < startLength; i++) {
    if (start[i] === "L" || start[i] === "R") {
      startArray.push([start[i], i])
    }
  }
  for (let i = 0; i < targetLength; i++) {
    if (target[i] === "L" || target[i] === "R") {
      targetArray.push([target[i], i])
    }
  }

  if (startArray.length !== targetArray.length) return false

  for (let i = 0; i < startArray.length; i++) {
    if (startArray[i][0] !== targetArray[i][0]) return false
    if (startArray[i][0] === "L") {
      if (startArray[i][1] < targetArray[i][1]) return false
      if (
        (startArray?.[i - 1]?.[1] !== undefined
          ? startArray?.[i - 1]?.[1]
          : -1) >= targetArray[i][1]
      )
        return false
      startArray[i][1] = targetArray[i][1]
    } else if (startArray[i][0] === "R") {
      if (startArray[i][1] > targetArray[i][1]) return false
      if (
        (startArray?.[i + 1]?.[1] !== undefined
          ? startArray?.[i + 1]?.[1]
          : targetLength) <= targetArray[i][1] &&
        startArray?.[i + 1]?.[0] !== "R"
      )
        return false
      startArray[i][1] = targetArray[i][1]
    }
  }

  return true
}

console.log(canChange(start, target))
