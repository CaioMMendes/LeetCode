const tasks = [
  [1, 6],
  [2, 3],
]

/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function (tasks: number[][]) {
  return tasks.reduce((acc, cur) => {
    const sum = cur[0] + cur[1]
    if (sum < acc) return sum
    return acc
  }, +Infinity)
}

console.log(earliestTime(tasks))
