const apple = [1, 3, 2],
  capacity = [4, 3, 1, 5, 2]

/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple: number[], capacity: number[]) {
  let sum = apple.reduce((acc, cur) => acc + cur, 0)

  const sorted = capacity.sort((a, b) => b - a)
  let count = 0
  while (sum > 0) {
    sum -= sorted[count]
    count++
  }
  return count
}

console.log(minimumBoxes(apple, capacity))
