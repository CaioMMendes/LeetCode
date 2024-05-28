const date = "2019-01-01"

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date: string) {
  const year = date.split("-")[0]

  const firstTime = new Date(`${year}-01-01`).getTime()
  const secondTime = new Date(date).getTime()

  const diference = secondTime - firstTime

  return diference / (24 * 60 * 60 * 1000) + 1
}

console.log(dayOfYear(date))
