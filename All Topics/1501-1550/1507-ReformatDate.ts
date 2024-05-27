const date = "6th Jun 1933"

//"2052-10-20"

/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date: string) {
  const convert = {
    Jan: "1",
    Feb: "2",
    Mar: "3",
    Apr: "4",
    May: "5",
    Jun: "6",
    Jul: "7",
    Aug: "8",
    Sep: "9",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  }
  const splited = date.split(" ")

  return `${splited[2]}-${convert[splited[1]].padStart(2, "0")}-${splited[0]
    .match(/\d/g)
    ?.join("")
    .padStart(2, "0")}`
}

console.log(reformatDate(date))
