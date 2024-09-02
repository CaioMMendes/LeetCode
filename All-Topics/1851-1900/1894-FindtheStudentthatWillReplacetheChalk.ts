const chalk = [5, 1, 5],
  k = 22

/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk: number[], k: number) {
  const totalChalk = chalk.reduce((a, b) => a + b, 0)

  // Reduz k ao valor menor que totalChalk, já que os ciclos se repetem
  k %= totalChalk
  console.log(k)

  // Agora encontra o estudante que ficará sem giz
  for (let i = 0; i < chalk.length; i++) {
    if (chalk[i] > k) {
      return i
    }
    k -= chalk[i]
  }

  return 0
}

console.log(chalkReplacer(chalk, k))
