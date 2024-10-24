const num1 = 1,
  num2 = 10,
  num3 = 1000

/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function (num1: number, num2: number, num3: number) {
  const num1String = String(num1).padStart(4, "0")
  const num2String = String(num2).padStart(4, "0")
  const num3String = String(num3).padStart(4, "0")

  let result = ""
  for (let i = 0; i < 4; i++) {
    const min = Math.min(num1String[i], num2String[i], num3String[i])
    result += min
  }

  return Number(result)
}

console.log(generateKey(num1, num2, num3))
