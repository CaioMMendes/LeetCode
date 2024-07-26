const num = "51230100"

/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num: string) {
  return num.replace(/0+$/g, "")
}

console.log(removeTrailingZeros(num))
