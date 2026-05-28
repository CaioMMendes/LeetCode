const num1 = "140",
  num2 = "721"

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1: string, num2: string) {
  let maths = []

  if (num1 === "0" || num2 === "0") return "0"

  for (let i = num2.length - 1; i >= 0; i--) {
    const digit = num2[i]
    let plus = 0
    let number = ""

    for (let j = num1.length - 1; j >= 0; j--) {
      let multiply = Number(digit) * Number(num1[j]) + plus
      plus = 0
      if (multiply >= 10) {
        plus = Math.floor(multiply / 10)
        multiply = multiply % 10
      }

      number += String(multiply)

      if (j === 0 && plus) {
        number += String(plus)
      }
    }

    maths.push(number.split("").reverse().join(""))
  }

  let maxLength = 0

  maths = maths.map((val, i) => {
    const newVal = val.padEnd(val.length + i, "0")
    if (newVal.length > maxLength) maxLength = newVal.length
    return newVal
  })

  maths = maths.map((val) => val.padStart(maxLength, "0"))

  const total = sum(maths)

  return total

  function sum(arr: string[]) {
    let result = ""
    let plus = 0

    for (let i = arr[0].length - 1; i >= 0; i--) {
      let sum = 0

      for (const val of arr) {
        sum += Number(val[i])
      }

      sum += plus
      plus = Math.floor(sum / 10)

      result += String(sum % 10)
      if (i === 0 && plus) {
        result = `${result}${plus}`
      }
    }
    return result.split("").reverse().join("")
  }
}

console.log(multiply(num1, num2))
