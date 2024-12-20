const num = 4

/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num: number) {
  let result = 0
  for (let i = 2; i <= num; i++) {
    const sum = String(i)
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0)
    if (sum % 2 === 0) result++
  }

  return result
}

console.log(countEven(num))
