const num = "4206"

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num: string) {
  const length = num.length
  // Itera de trás para frente
  for (let i = length - 1; i >= 0; i--) {
    // Verifica se o número atual é ímpar
    if (Number(num[i]) % 2 !== 0) {
      // Retorna a substring do início até o número ímpar encontrado
      return num.slice(0, i + 1)
    }
  }
  // Se nenhum número ímpar for encontrado, retorna uma string vazia
  return ""

  //Funciona porque se o ultimo numero for ímpar quer dizer que o numero já vai ser impar
  //então sempre vai começar do primeiro
}

console.log(largestOddNumber(num))
