const n = 9758

/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function (n: number) {
  const s = [1, 2, 2]
  let i = 2 // ponteiro que dita o tamanho dos grupos

  while (s.length < n) {
    const next = s[s.length - 1] === 1 ? 2 : 1 // alterna
    const count = s[i] // quantas vezes repetir
    for (let k = 0; k < count && s.length < n; k++) {
      s.push(next)
    }
    i++
  }

  let ones = 0
  for (let j = 0; j < n; j++) {
    if (s[j] === 1) ones++
  }
  return ones
}

console.log(magicalString(n))
