const startTime = "01:00:00",
  endTime = "01:00:25"

/**
 * @param {string} startTime
 * @param {string} endTime
 * @return {number}
 */
var secondsBetweenTimes = function (startTime: string, endTime: string) {
  const start = splitAndReturnNumbers(startTime)
  const end = splitAndReturnNumbers(endTime)

  return (
    (end[0] - start[0]) * 60 * 60 +
    (end[1] - start[1]) * 60 +
    (end[2] - start[2])
  )

  function splitAndReturnNumbers(str: string) {
    const splited = str.split(/:/g).map(Number)

    return splited
  }
}

console.log(secondsBetweenTimes(startTime, endTime))
