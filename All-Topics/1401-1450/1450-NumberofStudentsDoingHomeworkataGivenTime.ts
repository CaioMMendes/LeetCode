const startTime = [1, 2, 3],
  endTime = [3, 2, 7],
  queryTime = 4

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (
  startTime: number[],
  endTime: number[],
  queryTime: number
) {
  let response = 0

  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      response++
    }
  }

  return response
}

console.log(busyStudent(startTime, endTime, queryTime))
