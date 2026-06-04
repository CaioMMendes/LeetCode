const num1 = 120,
  num2 = 130

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function (num1: number, num2: number) {
  const min = num1 > 100 ? num1 : 100
  let result = 0

  for (let i = min; i <= num2; i++) {
    const string = String(i)

    for (let i = 1; i < string.length - 1; i++) {
      if (
        (string[i] > string[i - 1] && string[i] > string[i + 1]) ||
        (string[i] < string[i - 1] && string[i] < string[i + 1])
      )
        result++
    }
  }

  return result
}

console.log(totalWaviness(num1, num2))
