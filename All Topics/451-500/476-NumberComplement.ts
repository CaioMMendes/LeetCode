const num = 5

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num: number) {
  function invertBits(num, bitLength) {
    // Cria uma máscara com bits definidos até o comprimento desejado
    const mask = (1 << bitLength) - 1
    console.log(mask)
    // Aplica o operador bitwise NOT e depois aplica a máscara
    return ~num & mask
  }

  // Exemplo para inverter 8 bits

  const bitLength = num.toString(2).length
  const inverted = invertBits(num, bitLength)
  return inverted
}

console.log(findComplement(num))

// cria um numero com o numero de bites tudo 1 e depois fazer a comparação & para retornar os bites onde os dois são 1
