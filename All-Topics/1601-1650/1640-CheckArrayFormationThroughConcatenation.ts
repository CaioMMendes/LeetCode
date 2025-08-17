const arr = [15, 88],
  pieces = [[88], [15]]

/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr: number[], pieces: number[][]) {
  for (let i = 0; i < pieces.length; i++) {
    const index = arr.indexOf(pieces[i][0])
    for (let j = 0; j < pieces[i].length; j++) {
      if (pieces[i][j] !== arr[index + j]) return false
    }
  }

  return true
}

console.log(canFormArray(arr, pieces))
