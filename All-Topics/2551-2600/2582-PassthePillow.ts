const n = 4,
  time = 5

/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n: number, time: number) {
  const div = Math.floor(time / (n - 1)) // Dividir o tempo pelo número total de movimentos para ir e voltar
  const mod = time % (n - 1) // O restante do tempo após o ciclo completo

  if (div % 2 === 0) {
    // Se o número de voltas completas for par, estamos indo para a frente
    return 1 + mod
  } else {
    // Se o número de voltas completas for ímpar, estamos voltando
    return n - mod
  }
}

console.log(passThePillow(n, time))
