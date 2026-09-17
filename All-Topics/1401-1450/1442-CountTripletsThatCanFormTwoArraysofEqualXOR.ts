const arr = [2, 3, 1, 6, 7]

/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr: number[]) {
  let result = 0

  for (let i = 0; i < arr.length; i++) {
    let xor = 0 // XOR acumulado de arr[i] até arr[k]

    for (let k = i; k < arr.length; k++) {
      xor = xor ^ arr[k] // adiciona o elemento atual

      if (xor === 0) {
        result += k - i // todos os j entre i e k funcionam
      }
    }
  }

  return result
}

console.log(countTriplets(arr))

// Duas propriedades do XOR ajudam aqui:

// x ^ x = 0: um número com XOR nele mesmo dá zero.
// Se a === b, então a ^ b === 0.
