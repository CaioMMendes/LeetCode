const num = 4325

/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num: number) {
  const sorted = String(num)
    .split("")
    .sort((a, b) => Number(a) - Number(b))
  let num1 = ""
  let num2 = ""

  for (let i = 0; i < sorted.length; i++) {
    if (i % 2 === 0) {
      num1 += sorted[i]
    } else {
      num2 += sorted[i]
    }
  }

  return Number(num1) + Number(num2)
}

console.log(splitNum(num))
