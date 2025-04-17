const a = 1,
  b = 2

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a: number, b: number) {
  while (b !== 0) {
    let carry = (a & b) << 1
    a = a ^ b
    b = carry
  }
  return a
}

console.log(getSum(a, b))

//  Entendendo os números:

// a = 1 = 0001 (binário)
// b = 2 = 0010 (binário)
// 🔁 Primeira iteração:

// carry = (a & b) << 1;
//       = (0001 & 0010) << 1
//       = 0000 << 1
//       = 0000

// a = a ^ b;
//   = 0001 ^ 0010
//   = 0011 (ou seja, 3 em decimal)

// b = carry = 0
// Como b virou 0, o loop para e a = 3, que é o resultado da soma!

// 🧪 Exemplo com carry (mais interessante):
// Vamos ver getSum(2, 3)

// a = 2 = 0010
// b = 3 = 0011
// Iteração 1:

// carry = (a & b) << 1;
//       = (0010 & 0011) << 1
//       = 0010 << 1
//       = 0100

// a = a ^ b;
//   = 0010 ^ 0011
//   = 0001

// b = carry = 0100
// Iteração 2:

// carry = (a & b) << 1;
//       = (0001 & 0100) << 1
//       = 0000 << 1
//       = 0000

// a = 0001 ^ 0100 = 0101 (5)
// b = 0000
// Loop termina. Resultado: a = 5 ✅

// 🧠 Conclusão
// ^ (XOR) resolve a soma sem carry.

// & << 1 simula o carry como na soma normal.

// Repetimos até o carry desaparecer!
