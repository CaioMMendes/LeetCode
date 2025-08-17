const days = 10,
  meetings = [
    [5, 7],
    [1, 3],
    [9, 10],
  ]

/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days: number, meetings: number[][]) {
  meetings.sort((a, b) => a[0] - b[0]) // Ordena os intervalos pelo dia de início

  let busyDays = 0
  let lastEnd = 0

  for (const [start, end] of meetings) {
    if (end > lastEnd) {
      busyDays += end - Math.max(start, lastEnd + 1) + 1
      lastEnd = end
    }
  }

  return days - busyDays
}

console.log(countDays(days, meetings))
