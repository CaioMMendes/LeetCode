const n = 987

/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n: number) {
  const string = String(n)
  return string.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

console.log(thousandSeparator(n))
