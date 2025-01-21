const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle: number[][]) {
  let memo = new Map() // Usaremos um Map para armazenar resultados intermediários.

  function goNext(i: number, j: number): number {
    // Se já calculamos para (i, j), retornamos o valor armazenado.
    const key = `${i},${j}`
    if (memo.has(key)) return memo.get(key)

    // Caso base: chegou na última linha.
    if (i === triangle.length - 1) {
      return triangle[i][j]
    }

    // Calcula os caminhos à esquerda e à direita.
    const left = goNext(i + 1, j)
    const right = goNext(i + 1, j + 1)

    // Armazena o resultado no memo e retorna o menor caminho a partir de (i, j).
    const result = triangle[i][j] + Math.min(left, right)
    memo.set(key, result)
    return result
  }

  // Inicia a busca a partir do topo (0, 0).
  return goNext(0, 0)

  //todo Da forma que eu fiz dava timeout
  // let min = Infinity
  // let length=triangle.length-1

  // goNext(0,0,0)
  //     function goNext(sum,i,j){
  //       if(i>length)return
  //       sum += triangle[i][j];
  //         if(i===length && sum<min){
  //             min=sum
  //             return
  //         }
  //             goNext((sum),i+1,j)
  //             goNext((sum),i+1,j+1)

  //     }
  //     return min
}

console.log(minimumTotal(triangle))
