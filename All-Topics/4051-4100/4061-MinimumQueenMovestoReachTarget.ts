const source = [8, 1],
  target = [1, 8]

/**
 * @param {number[]} source
 * @param {number[]} target
 * @return {number}
 */
var minQueenMoves = function (source: number[], target: number[]) {
  if (target[0] === source[0] && target[1] === source[1]) return 0

  if (target[0] === source[0]) return 1

  if (target[1] === source[1]) return 1

  const difrow = Math.abs(target[0] - source[0])

  const difcol = Math.abs(target[1] - source[1])

  if (difrow === difcol) return 1

  return 2
}

console.log(minQueenMoves(source, target))
