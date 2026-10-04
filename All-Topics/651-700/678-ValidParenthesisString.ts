const s =
  "(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s: string) {
  let countLeft = 0
  let countBonus = 0

  // ida: verifica se todo ')' tem algo antes dele para fechar
  for (const val of s) {
    if (val === "*") {
      countBonus++
      continue
    }

    if (val === "(") {
      countLeft++
      continue
    }

    if (val === ")") {
      if (countLeft <= 0 && countBonus <= 0) {
        return false
      } else if (countLeft <= 0) {
        countBonus--
      } else {
        countLeft--
      }
    }
  }

  // volta: verifica se todo '(' tem algo depois dele para fechar
  let countRight = 0
  countBonus = 0

  for (let i = s.length - 1; i >= 0; i--) {
    const val = s[i]

    if (val === "*") {
      countBonus++
      continue
    }

    if (val === ")") {
      countRight++
      continue
    }

    if (val === "(") {
      if (countRight <= 0 && countBonus <= 0) {
        return false
      } else if (countRight <= 0) {
        countBonus--
      } else {
        countRight--
      }
    }
  }

  return true
}

console.log(checkValidString(s))
