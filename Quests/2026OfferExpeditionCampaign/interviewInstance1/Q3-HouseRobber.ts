const nums = [1, 2, 3, 1]

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums: number[]) {
  // Se não houver casas
  if (nums.length === 0) return 0

  // Se houver apenas uma casa
  if (nums.length === 1) return nums[0]

  // dp[i] = maior valor que podemos ter até a casa i
  const dp = new Array(nums.length)

  // Primeira casa:
  // Só podemos roubar ela
  dp[0] = nums[0]

  // Segunda casa:
  // Escolhemos a maior entre casa 0 e casa 1
  dp[1] = Math.max(nums[0], nums[1])

  // Agora vamos preencher o resto
  for (let i = 2; i < nums.length; i++) {
    // Opção 1: NÃO roubar a casa atual
    // Ficamos com o melhor até a casa anterior
    const naoRoubar = dp[i - 1]

    // Opção 2: Roubar a casa atual
    // Pegamos o valor dela + melhor até i-2
    const roubar = nums[i] + dp[i - 2]

    // Escolhemos o maior valor
    dp[i] = Math.max(naoRoubar, roubar)
  }

  // O último valor terá o melhor resultado
  return dp[nums.length - 1]
}

console.log(rob(nums))
