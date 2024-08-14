const num = 9669

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num: number) {
  const string = String(num)

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "6") {
      return Number(
        string.slice(0, i) + "9" + string.slice(i + 1, string.length)
      )
    }
  }

  return num
}

console.log(maximum69Number(num))
