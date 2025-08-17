const num = 11891

/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num: number) {
  const numString = String(num)

  let regexMax = new RegExp(numString[0], "g")

  for (let i = 0; i < numString.length; i++) {
    if (numString[i] !== "9") {
      regexMax = new RegExp(numString[i], "g")
      break
    }
  }

  const max = numString.replace(regexMax, "9")

  const regexMin = new RegExp(numString[0], "g")

  for (let i = 0; i < numString.length; i++) {
    if (numString[i] !== "0") {
      regexMax = new RegExp(numString[i], "g")
      break
    }
  }

  const min = numString.replace(regexMin, "0")

  return Number(max) - Number(min)
}

console.log(minMaxDifference(num))
