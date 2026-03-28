const s = "3+2*2"

var calculate = function (s: string) {
  let split = s.split(/[+\-*/]/).map(Number)
  let operators = s.match(/[+\-*/]/g) ?? []

  let newNumbers = [split[0]]
  let newOperators = []

  for (let i = 0; i < operators.length; i++) {
    const operator = operators[i]

    if (operator === "*") {
      const result = newNumbers[newNumbers.length - 1] * split[i + 1]

      newNumbers[newNumbers.length - 1] = result
    } else if (operator === "/") {
      const result = Math.trunc(
        newNumbers[newNumbers.length - 1] / split[i + 1],
      )

      newNumbers[newNumbers.length - 1] = result
    } else {
      newOperators.push(operator)
      newNumbers.push(split[i + 1])
    }
  }

  let result = newNumbers[0]

  for (let i = 0; i < newOperators.length; i++) {
    const operator = newOperators[i]

    if (operator === "+") {
      result += newNumbers[i + 1]
    } else if (operator === "-") {
      result -= newNumbers[i + 1]
    }
  }

  return result
}

console.log(calculate(s))
