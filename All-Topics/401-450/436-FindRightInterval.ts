const intervals = [
  [3, 4],
  [2, 3],
  [1, 2],
]

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals: number[][]) {
  const result = []
  for (let i = 0; i < intervals.length; i++) {
    let min = Infinity
    let index = -1

    for (let j = 0; j < intervals.length; j++) {
      if (intervals[j][0] >= intervals[i][1]) {
        if (min > intervals[j][0]) {
          min = intervals[j][0]
          index = j
        }
      }
    }
    result.push(index)
  }
  return result
}

console.log(findRightInterval(intervals))
