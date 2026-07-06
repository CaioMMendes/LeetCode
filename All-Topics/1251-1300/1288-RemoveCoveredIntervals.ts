const intervals = [
  [1, 4],
  [3, 6],
  [2, 8],
]

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals: number[][]) {
  let result = intervals.length

  for (let j = 0; j < intervals.length; j++) {
    let error = false
    for (let i = 0; i < intervals.length; i++) {
      if (i === j) continue
      if (
        intervals[i][0] <= intervals[j][0] &&
        intervals[i][1] >= intervals[j][1]
      ) {
        error = true
        break
      }
    }
    if (error) result--
  }

  return result
}

console.log(removeCoveredIntervals(intervals))
