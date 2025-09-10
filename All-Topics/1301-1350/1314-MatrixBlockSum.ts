const mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  k = 1

//? minha solução não passa na performance

// /**
//  * @param {number[][]} mat
//  * @param {number} k
//  * @return {number[][]}
//  */
// var matrixBlockSum = function(mat, k) {

//     return mat.map((val,index,array)=>{

//         return val.map((insideVal,jindex)=>{

//         let result=0

//         for(let i=(index-k);i<=(index+k);i++){

//             for(let j=(jindex-k);j<=(jindex+k);j++){
//                 result+=mat?.[i]?.[j]??0
//             }

//         }

//         return result
//         })

//     })

// };

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat: number[][], k: number) {
  const rows = mat.length
  const cols = mat[0].length

  // Cria matriz de prefixos (1 a mais em cada dimensão para simplificar bordas)
  const prefix = Array(rows + 1)
    .fill(0)
    .map(() => Array(cols + 1).fill(0))

  // Preenche matriz de prefixos
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      prefix[i][j] =
        mat[i - 1][j - 1] +
        prefix[i - 1][j] +
        prefix[i][j - 1] -
        prefix[i - 1][j - 1]
    }
  }

  // Função para pegar soma de um sub-bloco (x1,y1) até (x2,y2)
  const getSum = (x1: number, y1: number, x2: number, y2: number) => {
    x1 = Math.max(0, x1)
    y1 = Math.max(0, y1)
    x2 = Math.min(rows - 1, x2)
    y2 = Math.min(cols - 1, y2)

    return (
      prefix[x2 + 1][y2 + 1] -
      prefix[x1][y2 + 1] -
      prefix[x2 + 1][y1] +
      prefix[x1][y1]
    )
  }

  // Resultado final
  const result = Array(rows)
    .fill(0)
    .map(() => Array(cols).fill(0))
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[i][j] = getSum(i - k, j - k, i + k, j + k)
    }
  }

  return result
}

console.log(matrixBlockSum(mat, k))
