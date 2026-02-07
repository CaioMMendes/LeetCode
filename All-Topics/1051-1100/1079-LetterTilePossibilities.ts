const tiles = "AAB"

/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles: string) {
  const letters = tiles.split("")
  const set = new Set()

  for (let i = 0; i < tiles.length; i++) {
    getString(letters[i], [i])
  }

  return set.size

  function getString(string: string, used: number[]) {
    set.add(string)

    if (letters.length > 0) {
      for (let i = 0; i < tiles.length; i++) {
        if (used.some((val) => val === i)) continue
        getString(string + letters[i], [...used, i])
      }
    }
  }
}

console.log(numTilePossibilities(tiles))
