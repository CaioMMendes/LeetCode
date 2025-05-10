/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word: string) {
  const count: Record<string, number> = {}

  for (let i = 0; i < word.length; i++) {
    const element = word[i]
    if (count[element]) {
      count[element]++
    } else {
      count[element] = 1
    }
  }

  const values = Object.values(count)

  // Testa cada caractere removendo uma ocorrência
  for (let i = 0; i < values.length; i++) {
    const newFrequencies = [...values]
    newFrequencies[i]-- // Remove uma ocorrência do caractere i

    // Remove frequências iguais a 0 (caractere "removido")
    const filteredFrequencies = newFrequencies.filter((f) => f > 0)

    // Verifica se todas as frequências restantes são iguais
    if (new Set(filteredFrequencies).size === 1) {
      return true
    }
  }

  return false // Não foi possível equalizar as frequências
}

console.log(equalFrequency(word))
