const num1 = "9333852702227987",
  num2 = "85731737104263"

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1: string, num2: string) {
  const num1Length = num1.length
  const num2Length = num2.length

  const biggest = Math.max(num1Length, num2Length)
  const newNum1 = num1.padStart(biggest, "0")
  const newNum2 = num2.padStart(biggest, "0")
  let result = ""
  let rest = 0

  for (let index = 1; index <= biggest; index++) {
    let sum =
      Number(newNum1[biggest - index]) + Number(newNum2[biggest - index]) + rest

    if (sum >= 10) {
      rest = 1
      sum -= 10
    } else {
      rest = 0
    }

    result += sum
    if (index === biggest && rest === 1) {
      result += 1
    }
  }

  return result.split("").reverse().join("")
}

console.log(addStrings(num1, num2))
