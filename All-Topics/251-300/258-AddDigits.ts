const num = 38

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num: number) {
  function sumDigits(num) {
    const stringNum = String(num)
    const stringLength = stringNum.length
    let sum = 0

    for (let i = 0; i < stringLength; i++) {
      sum += Number(stringNum[i])
    }

    if (sum < 10) return sum

    return sumDigits(sum)
  }

  return sumDigits(num)
}

console.log(addDigits(num))
