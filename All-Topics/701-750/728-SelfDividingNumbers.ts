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
    const length = string.length
    let error = false
    for (let j = 0; j < length; j++) {
      if (i % Number(string[j]) !== 0) {
        error = true
        break
      }
    }
    if (!error) result.push(i)
  }
  return result
}

console.log(selfDividingNumbers(left, right))
