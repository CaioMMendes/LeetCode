const num = 526

/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num: number) {
  const string = String(num)
  if (string[string.length - 1] === "0" && string !== "0") {
    return false
  }
  return true
}

console.log(num)
