const num = 2932

/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num: number) {
  const sortedNums = String(num)
    .split("")
    .map(Number)
    .sort((a, b) => a - b)

  const firstNum = Number(String(sortedNums[0]) + String(sortedNums[2]))
  const secondNum = Number(String(sortedNums[1]) + String(sortedNums[3]))
  return firstNum + secondNum
}

console.log(minimumSum(num))
