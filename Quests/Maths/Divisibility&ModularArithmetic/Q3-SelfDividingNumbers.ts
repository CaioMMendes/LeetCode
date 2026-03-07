const left = 1,
  right = 22

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left: number, right: number) {
  const result = []

  for (let i = left; i <= right; i++) {
    const string = String(i)
    const splited = string.split("")
    if (splited.some((val) => val === "0")) continue

    let error = false
    for (const val of splited) {
      if (i % Number(val) !== 0) {
        error = true
        break
      }
    }
    if (error) continue

    result.push(i)
  }

  return result
}

console.log(selfDividingNumbers(left, right))
