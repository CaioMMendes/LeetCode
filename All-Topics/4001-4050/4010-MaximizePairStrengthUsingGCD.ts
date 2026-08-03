const nums = [2, 3, 5]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxPairStrength = function (nums: number[]) {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const div = gcd(nums[i], nums[j])
      const calc = (nums[i] * nums[j]) / div ** 2
      if (calc > result) result = calc
    }
  }
  return result

  function gcd(num1: number, num2: number) {
    const min = Math.min(num1, num2)

    if (num2 === 0) return num1

    return gcd(num2, num1 % num2)
  }
}

// Imagine que você tem um chão retangular de 18 passos de largura por 12 passos de fundo, e quer cobrir tudo com ladrilhos quadrados, todos do mesmo tamanho, sem cortar nenhum e sem sobrar buraco.

// Qual é o maior ladrilho quadrado que serve?

// O truque de Euclides é assim: corte o maior quadrado que couber, e olhe o pedaço que sobrou.

console.log(maxPairStrength(nums))
