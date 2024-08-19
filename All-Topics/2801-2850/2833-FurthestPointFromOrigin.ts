type Move = "R" | "L" | "_"

const moves: Move[] = "L_RL__R".split("") as Move[]

/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (moves: Move[]) {
  const count = {
    "L": 0,
    "R": 0,
    "_": 0,
  }

  for (let i = 0; i < moves.length; i++) {
    count[moves[i]]++
  }

  if (count["L"] > count["R"]) {
    return count["L"] + count["_"] - count["R"]
  }

  return count["R"] + count["_"] - count["L"]
}

console.log(furthestDistanceFromOrigin(moves))
