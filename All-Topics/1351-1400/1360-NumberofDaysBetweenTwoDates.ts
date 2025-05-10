const date1 = "2019-06-29",
  date2 = "2019-06-30"

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1: string, date2: string) {
  return (
    Math.abs(new Date(date2).getTime() - new Date(date1).getTime()) /
    (1000 * 24 * 60 * 60)
  )
}

console.log(daysBetweenDates(date1, date2))
