const date = "2080-02-29"

/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date: string) {
  return date
    .split("-")
    .map((val) => Number(val).toString(2))
    .join("-")
}

console.log(convertDateToBinary(date))
