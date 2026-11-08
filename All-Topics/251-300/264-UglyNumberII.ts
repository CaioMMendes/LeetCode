const n = 10

var nthUglyNumber = function (n: number) {
  let count = 0
  let candidatos = [1] // próximos ugly que ainda não visitei
  const vistos = new Set([1]) // pra não colocar o mesmo número duas vezes

  while (true) {
    candidatos.sort((a, b) => a - b)
    const i = candidatos.shift() // pega o MENOR candidato (em vez de i++)

    count++ // todo i aqui já é ugly, então conta direto
    if (count === n) return i

    // gera os próximos ugly a partir desse
    for (const p of [2, 3, 5]) {
      const novo = i ?? 0 * p
      if (!vistos.has(novo)) {
        vistos.add(novo)
        candidatos.push(novo)
      }
    }
  }
}

console.log(nthUglyNumber(n))
