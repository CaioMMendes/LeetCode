const deck = [1, 2, 3, 4, 4, 3, 2, 1]

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck: number[]) {
  const count: Record<string, number> = {}

  for (let value of deck) {
    if (count[value]) {
      count[value]++
    } else {
      count[value] = 1
    }
  }

  let already: number[] = []
  let start = 2
  let error = false

  while (true) {
    for (let key in count) {
      const value = count[key]
      if (start > value) return false
      if (already.some((val) => val % start === 0)) {
        error = true
        break
      }
      if (value % start !== 0) {
        error = true
        already.push(start)
        break
      }
    }
    if (error === false) return true
    error = false

    start++
  }
}

console.log(hasGroupsSizeX(deck))
