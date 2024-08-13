const tickets = [5, 1, 1, 1],
  k = 0

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets: number[], k: number) {
  const target = tickets.length
  let result = 0

  for (let index = 0; index < target; index++) {
    const element = tickets[index]
    if (element > 0) {
      result++
      tickets[index] = tickets[index] - 1
    }
    if (tickets[k] <= 0) {
      break
    }

    if (index === target - 1) {
      index = -1
    }
  }
  return result
}

console.log(timeRequiredToBuy(tickets, k))
