const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals: number[][]) {
  intervals.sort((a, b) => a[0] - b[0])

  const result = []
  let current = intervals[0]

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i]

    if (current[1] >= interval[0]) {
      current = [current[0], Math.max(current[1], interval[1])]
    } else {
      result.push(current)
      current = interval
    }
  }

  result.push(current)

  return result
}

console.log(merge(intervals))
