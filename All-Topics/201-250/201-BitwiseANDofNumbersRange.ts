const left = 5,
  right = 7

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left: number, right: number) {
  let shift = 0

  // Encontre o prefixo comum entre `left` e `right`
  while (left < right) {
    left >>= 1 // Desloca `left` 1 bit à direita
    right >>= 1 // Desloca `right` 1 bit à direita
    shift++ // Conta os bits deslocados
  }

  // Desloca o prefixo comum de volta para a esquerda
  return left << shift

  // let result=left

  // for(let i=left;i<=right;i++){
  //     result=result&i
  //     if(result===0)return 0
  // }

  // return result
}

console.log(rangeBitwiseAnd(left, right))
