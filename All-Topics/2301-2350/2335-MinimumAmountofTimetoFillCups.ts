const amount = [1, 4, 2]

/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount: number[]) {
  let result = 0
  while (amount[0] > 0 || amount[1] > 0 || amount[2] > 0) {
    if (amount[0] > 0) {
      result++
      amount[0]--
      const max = Math.max(amount[1], amount[2])
      if (amount[1] === max) {
        amount[1]--
        continue
      }
      if (amount[2] === max) {
        amount[2]--
        continue
      }
      continue
    }

    if (amount[1] > 0) {
      result++
      amount[1]--
      if (amount[2]) {
        amount[2]--
        continue
      }
      continue
    }

    if (amount[2] > 0) {
      result++
      amount[2]--
      continue
    }
  }

  return result
}

console.log(fillCups(amount))
