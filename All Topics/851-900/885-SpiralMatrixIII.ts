const rows = 5,
  cols = 6,
  rStart = 1,
  cStart = 4

/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (
  rows: number,
  cols: number,
  rStart: number,
  cStart: number
) {
  let count = 0
  const stop = cols * rows
  const result: number[][] = []
  const realCols = cols - 1
  const realRows = rows - 1
  let increment = 1

  if (cStart <= realCols && rStart <= realRows) {
    result.push([rStart, cStart])
    count++
    if (count >= stop) {
      return result
    }
  }

  while (true) {
    //direita
    for (let i = 0; i < increment; i++) {
      cStart++
      if (
        cStart <= realCols &&
        rStart <= realRows &&
        cStart >= 0 &&
        rStart >= 0
      ) {
        result.push([rStart, cStart])
        count++
        if (count >= stop) {
          return result
        }
      }
    }

    //baixo
    for (let i = 0; i < increment; i++) {
      rStart++
      if (
        cStart <= realCols &&
        rStart <= realRows &&
        cStart >= 0 &&
        rStart >= 0
      ) {
        result.push([rStart, cStart])
        count++
        if (count >= stop) {
          return result
        }
      }
    }

    //esquerda
    for (let i = 0; i < increment + 1; i++) {
      cStart--
      if (
        cStart <= realCols &&
        rStart <= realRows &&
        cStart >= 0 &&
        rStart >= 0
      ) {
        result.push([rStart, cStart])
        count++
        if (count >= stop) {
          return result
        }
      }
    }

    //cima
    for (let i = 0; i < increment + 1; i++) {
      rStart--
      if (
        cStart <= realCols &&
        rStart <= realRows &&
        cStart >= 0 &&
        rStart >= 0
      ) {
        result.push([rStart, cStart])
        count++
        if (count >= stop) {
          return result
        }
      }
    }

    increment += 2
  }
}

console.log(spiralMatrixIII(rows, cols, rStart, cStart))
