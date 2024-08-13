const day = 31,
  month = 8,
  year = 2019

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day: number, month: number, year: number) {
  const date = new Date(`${year}-${month}-${day}`).toLocaleString("en-us", {
    weekday: "long",
  })

  return date
}

console.log(dayOfTheWeek(day, month, year))
