const num = 1234

/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num: number) {
  const nums = String(num).split("")
  const odds: number[] = []
  const evens: number[] = []
  const evenOrOdd = nums.map((val) => {
    if (Number(val) % 2 === 0) {
      evens.push(Number(val))
      return 0
    }
    odds.push(Number(val))
    return 1
  })
  let oddCount = -1
  let evenCount = -1

  odds.sort((a, b) => b - a)
  evens.sort((a, b) => b - a)
  const result = evenOrOdd.map((val) => {
    if (val === 0) {
      evenCount++
      return evens[evenCount]
    }

    oddCount++
    return odds[oddCount]
  })

  return Number(result.join(""))
}

console.log(largestInteger(num))
