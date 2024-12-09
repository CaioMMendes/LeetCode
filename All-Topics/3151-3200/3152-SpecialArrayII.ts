const nums = [3, 4, 1, 2, 6],
  queries = [[0, 4]]

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums: number[], queries: number[][]) {
  //   const result = [];

  //     for (const [start, end] of queries) {
  //         let isSpecial = true; // Assume inicialmente que o intervalo é especial

  //         for (let i = start + 1; i <= end; i++) {
  //             // Verifica se o elemento atual e o anterior são ambos pares ou ambos ímpares
  //             if ((nums[i] % 2) === (nums[i - 1] % 2)) {
  //                 isSpecial = false; // Não alterna entre par e ímpar
  //                 break;
  //             }
  //         }

  //         result.push(isSpecial); // Adiciona o resultado para a query atual
  //     }

  //     return result;

  const n = nums.length

  // Passo 1: Pré-computar um array de alternância
  const alternates = new Array(n - 1).fill(true)
  for (let i = 0; i < n - 1; i++) {
    // Define se `nums[i]` e `nums[i + 1]` alternam
    alternates[i] = nums[i] % 2 !== nums[i + 1] % 2
  }

  // Passo 2: Criar um prefix sum para `alternates`
  const prefixSum = new Array(n).fill(0)
  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + (alternates[i - 1] ? 0 : 1)
  }

  // Passo 3: Responder às consultas
  const result = []
  for (const [start, end] of queries) {
    // Se não houver alternância em algum lugar no intervalo [start, end-1]
    // a soma prefixada será maior que 0
    result.push(prefixSum[end] - prefixSum[start] === 0)
  }

  return result
}

console.log(isArraySpecial(nums, queries))
