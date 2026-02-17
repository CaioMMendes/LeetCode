const n = 2

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n: number) {
  let result = 0
  let limit = 10 ** n

  makeNumber("", [])

  return result

  function makeNumber(number: string, already: number[]) {
    if (number.length > n) return
    result++

    for (let i = 0; i < 10; i++) {
      if (number.length === 0 && i === 0) continue

      if (already.some((num) => num === i)) continue
      makeNumber(`${number}${i}`, [...already, i])
    }
  }
}

console.log(countNumbersWithUniqueDigits(n))
