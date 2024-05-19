const n = 5

/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n: number) {
  function invertBits(n, bitLength) {
    // Cria uma máscara com bits definidos até o comprimento desejado
    const mask = (1 << bitLength) - 1

    // Aplica o operador bitwise NOT e depois aplica a máscara
    return ~n & mask
  }

  // Exemplo para inverter 8 bits

  const bitLength = n.toString(2).length
  const inverted = invertBits(n, bitLength)
  return inverted
}

console.log(bitwiseComplement(n))
