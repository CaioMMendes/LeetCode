const secret = "1807",
  guess = "7810"

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret: string, guess: string) {
  let bulls = 0
  let cows = 0

  const countSecret: Record<string, number> = {}
  const countGuess: Record<string, number> = {}

  for (let i = 0; i < secret.length; i++) {
    if (countSecret[secret[i]]) {
      countSecret[secret[i]]++
    } else {
      countSecret[secret[i]] = 1
    }
  }
  for (let i = 0; i < guess.length; i++) {
    if (countGuess[guess[i]]) {
      countGuess[guess[i]]++
    } else {
      countGuess[guess[i]] = 1
    }
  }
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i] && countSecret[secret[i]] > 0) {
      bulls++
      countSecret[secret[i]]--
      countGuess[secret[i]]--
    }
  }
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) continue
    if (countSecret[guess[i]] > 0) {
      cows++
      countSecret[guess[i]]--
    }
  }

  return `${bulls}A${cows}B`
}

console.log(getHint(secret, guess))
