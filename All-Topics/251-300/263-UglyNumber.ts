const n = 6

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n: number) {
  if (n <= 0) return false // Números negativos ou zero não são considerados ugly

  // Divide n por 2, 3 e 5 o máximo possível
  while (n % 2 === 0) n /= 2
  while (n % 3 === 0) n /= 3
  while (n % 5 === 0) n /= 5

  // Se o resultado for 1, significa que todos os fatores primos eram 2, 3 ou 5
  return n === 1
}

console.log(isUgly(n))
