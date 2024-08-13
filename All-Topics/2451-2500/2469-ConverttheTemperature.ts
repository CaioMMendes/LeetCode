const celsius = 36.5

/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius: number) {
  return [celsius + 273.15, celsius * 1.8 + 32.0]
}

console.log(convertTemperature(celsius))
