const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
  n = 0

/**
 * @param {Array} arr
 * @param {number} n
 * @return {Array}
 */
var flat = function (arr: any[], n: number) {
  //     for(let i=0;i<n;i++){
  //         const tempArr=[]
  //         arr.forEach((val)=>{
  //             if(typeof (val)!=='object'){
  //                 tempArr.push(val)
  //             }else{
  //                 val.forEach(value=>tempArr.push(value))
  //             }
  //         })
  //         arr=tempArr
  //     }

  // return arr

  let result = [...arr] // Copiar o array original
  let tempArr = [] // Inicializar fora do loop para reutilizar

  while (n > 0) {
    let shouldFlatten = false // Verifica se ainda há algo a achatar
    tempArr = [] // Limpa o array temporário

    for (const val of result) {
      if (Array.isArray(val)) {
        tempArr.push(...val) // Achata o array um nível
        shouldFlatten = true // Ainda há arrays aninhados
      } else {
        tempArr.push(val) // Valores não são arrays, então apenas adiciona
      }
    }

    if (!shouldFlatten) break // Para se não houver mais arrays aninhados
    result = tempArr // Atualiza o array principal para a próxima iteração
    n-- // Diminui a profundidade
  }

  return result
}

console.log(flat(arr, n))
