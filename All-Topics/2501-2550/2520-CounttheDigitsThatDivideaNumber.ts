const num = 7

/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num: number) {
  const splited = String(num).split("")

  const obj: Record<string, boolean> = {}
  let result = 0
  for (const value of splited) {
    if (obj[value]) {
      result++
      continue
    } else if (obj[value] === false) {
      continue
    }
    if (num % Number(value) === 0) {
      obj[value] = true
      result++
    } else {
      obj[value] = false
    }
  }

  return result
}

console.log(countDigits(num))
