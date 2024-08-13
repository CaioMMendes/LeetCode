const x = 18

/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x: number) {
  const stringNumber = String(x)
  const stringNumberLength = stringNumber.length
  let sum = 0

  for (let i = 0; i < stringNumberLength; i++) {
    sum += Number(stringNumber[i])
  }

  return Number.isInteger(x / sum) ? sum : -1
}

console.log(sumOfTheDigitsOfHarshadNumber(x))
