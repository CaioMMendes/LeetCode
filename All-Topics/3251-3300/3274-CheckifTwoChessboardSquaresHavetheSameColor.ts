const coordinate1 = "a1",
  coordinate2 = "c3"

/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function (coordinate1: string, coordinate2: string) {
  const odd = ["a", "c", "e", "g"]
  const some1 = odd.some((val) => val === coordinate1[0])
  const some2 = odd.some((val) => val === coordinate2[0])
  const odd1 = Number(coordinate1[1]) % 2 !== 0
  const odd2 = Number(coordinate2[1]) % 2 !== 0

  return (
    ((some1 && odd1) || (!some1 && !odd1)) ===
    ((some2 && odd2) || (!some2 && !odd2))
  )
}

console.log(checkTwoChessboards(coordinate1, coordinate2))
