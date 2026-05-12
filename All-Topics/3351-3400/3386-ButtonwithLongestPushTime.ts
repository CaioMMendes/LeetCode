type numberOfNull = null | number

const events = [
  [10, 4],
  [1, 6],
  [7, 14],
]

/**
 * @param {number[][]} events
 * @return {number}
 */
var buttonWithLongestTime = function (events: number[][]) {
  let min: number[] = [-1, 0]

  for (let i = 0; i < events.length; i++) {
    const val = events[i]
    if (min[0] === -1) {
      min = val
      continue
    }
    const diff = val[1] - events[i - 1][1]
    if (diff === min[1] && min[0] > val[0]) {
      min = [val[0], diff]
    } else if (diff > min[1]) {
      min = [val[0], diff]
    }
  }

  return min[0]
}

console.log(buttonWithLongestTime(events))
