// const customers = [4, 10, 10],
//   grumpy = [1, 1, 0],
//   minutes = 2
//24

// const customers = [1, 0, 1, 2, 1, 1, 7, 5],
//   grumpy = [0, 1, 0, 1, 0, 1, 0, 1],
//   minutes = 3
//16

const customers = [10, 1, 7],
  grumpy = [0, 0, 0],
  minutes = 2
// 18

// const customers = [1],
//   grumpy = [0],
//   minutes = 1
// 1

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (
  customers: number[],
  grumpy: number[],
  minutes: number
) {
  const customersLength = customers.length
  let totalSum = customers.reduce((acc, cur, index) => {
    return acc + cur * (grumpy[index] === 0 ? 1 : 0)
  }, 0)
  let current = 0
  let currentTotal = 0
  for (let i = 0; i < minutes; i++) {
    current += customers[i] * (grumpy[i] === 0 ? 1 : 0)
    currentTotal += customers[i]
  }
  let init = 0
  let diference = currentTotal - current
  let result = diference
  const repeat = customersLength - minutes

  for (let index = 1; index <= repeat; index++) {
    const nextDiference =
      customers[index + minutes - 1] * grumpy[index + minutes - 1]
    const initDiference = customers[init] * grumpy[init]
    current += nextDiference - initDiference
    diference += nextDiference - initDiference
    if (diference > result) {
      result = diference
    }

    init++
  }

  return result + totalSum
}

console.log(maxSatisfied(customers, grumpy, minutes))
