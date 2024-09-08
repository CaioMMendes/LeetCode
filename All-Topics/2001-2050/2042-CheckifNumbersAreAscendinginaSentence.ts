const s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles"

/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s: string) {
  const teste = s.match(/\d+/g)
  if (teste) {
    for (let i = 1; i < teste.length; i++) {
      if (Number(teste[i]) <= Number(teste[i - 1])) {
        return false
      }
    }
  }

  return true
}

console.log(areNumbersAscending(s))
