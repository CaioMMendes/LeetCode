//@ts-nocheck

const n = 4,
  pick = [
    [0, 0],
    [1, 0],
    [1, 0],
    [2, 1],
    [2, 1],
    [2, 0],
  ]

/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function (n: number, pick: number[][]) {
  const balls: Record<string, number> = {}

  for (let i = 0; i < pick.length; i++) {
    element = pick[i]

    if (balls[element[0]]) {
      if (balls[element[0]][element[1]]) {
        balls[element[0]][element[1]]++
      } else {
        balls[element[0]][element[1]] = 1
      }
    } else {
      balls[element[0]] = { [element[1]]: 1 }
    }
  }

  let result = 0

  for (let key in balls) {
    for (let key1 in balls[key]) {
      if (balls[key][key1] > Number(key)) {
        result++
        break
      }
    }
  }

  return result
}

console.log(winningPlayerCount(n, pick))
