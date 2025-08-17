const digits = [1, 2, 3, 4]

/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function (digits: number[]) {
  const set = new Set()

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === 0) continue

    for (let j = 0; j < digits.length; j++) {
      if (j === i) continue

      for (let k = 0; k < digits.length; k++) {
        if (k === i || k === j || digits[k] % 2 !== 0) continue

        const stringNumber = `${digits[i]}${digits[j]}${digits[k]}`
        set.add(Number(stringNumber))
      }
    }
  }

  return set.size
}

console.log(totalNumbers(digits))
