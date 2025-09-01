const n = 1553322

/**
 * @param {number} n
 * @return {number}
 */
var getLeastFrequentDigit = function (n: number) {
  const string = String(n)

  const map = new Map()

  let result = [0, Infinity]

  for (let i = 0; i < string.length; i++) {
    if (map.get(string[i])) {
      map.set(string[i], map.get(string[i]) + 1)
    } else {
      map.set(string[i], 1)
    }
  }

  for (const [key, val] of map) {
    const numberKey = Number(key)
    if (val === result[1] && numberKey < result[0]) {
      result = [numberKey, val]
    } else if (val < result[1]) {
      result = [numberKey, val]
    }
  }

  return result[0]
}

console.log(getLeastFrequentDigit(n))
