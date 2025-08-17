const length = 1000,
  width = 35,
  height = 700,
  mass = 300

/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function (
  length: number,
  width: number,
  height: number,
  mass: number
) {
  const categories = new Set()
  const volume = length * width * height
  if (
    length >= 10000 ||
    width >= 10000 ||
    height >= 10000 ||
    volume >= 1000000000
  ) {
    categories.add("Bulky")
  }

  if (mass >= 100) {
    categories.add("Heavy")
  }

  if (categories.has("Bulky") && categories.has("Heavy")) {
    return "Both"
  }

  if (!categories.has("Bulky") && !categories.has("Heavy")) {
    return "Neither"
  }

  if (categories.has("Bulky") && !categories.has("Heavy")) {
    return "Bulky"
  }

  if (!categories.has("Bulky") && categories.has("Heavy")) {
    return "Heavy"
  }
}

console.log(categorizeBox(length, width, height, mass))
