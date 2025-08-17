const k = 3,
  n = 7

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k: number, n: number) {
  let min = 0
  for (let i = 1; i <= k; i++) {
    min += i
  }
  if (min > n) return []
  if (n > 45) return []
  const result: number[][] = []

  function backtrack(start: number, path: number[], sum: number) {
    // Se atingimos k números e a soma for n, adicionamos ao resultado
    if (path.length === k && sum === n) {
      /*
  Quando você faz result.push(path);, está adicionando a referência do array path em result,
  e não uma cópia do seu conteúdo no momento atual.
  Como path continua sendo modificado pela recursão,
  todas as referências no array result acabam apontando para o mesmo objeto modificado.
*/
      result.push([...path])
      return
    }

    // Se já usamos k números ou a soma excedeu n, encerramos essa busca
    if (path.length >= k || sum > n) return

    // Testamos números de start a 9 (para evitar repetições)
    for (let i = start; i <= 9; i++) {
      path.push(i) // Adiciona o número à combinação
      backtrack(i + 1, path, sum + i) // Chama recursivamente com o próximo número
      path.pop() // Remove o número para explorar outra possibilidade
    }
  }

  backtrack(1, [], 0)
  return result
}

console.log(combinationSum3(k, n))
