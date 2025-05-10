const moves = "UD"

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves: string) {
  const coordenate = [0, 0]
  const length = moves.length

  for (let i = 0; i < length; i++) {
    if (moves[i] === "U") {
      coordenate[1]++
    } else if (moves[i] === "D") {
      coordenate[1]--
    } else if (moves[i] === "L") {
      coordenate[0]--
    } else {
      coordenate[0]++
    }
  }

  return coordenate[0] === 0 && coordenate[1] === 0
}

console.log(judgeCircle(moves))
