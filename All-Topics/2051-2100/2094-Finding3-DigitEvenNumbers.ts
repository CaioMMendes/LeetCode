const digits = [2, 1, 3, 0]

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits: number[]) {
  const result = new Set()
  const length = digits.length

  for (let i = 0; i < length; i++) {
    if (digits[i] === 0) {
      continue
    }

    for (let j = 0; j < length; j++) {
      if (j === i) continue

      for (let k = 0; k < length; k++) {
        if (k === i || k === j) continue
        const number = `${digits[i]}${digits[j]}${digits[k]}`
        if (digits[k] % 2 === 0) {
          result.add(Number(number))
        }
      }
    }
  }

  return [...result].map(Number).sort((a, b) => a - b)
}

console.log(findEvenNumbers(digits))
