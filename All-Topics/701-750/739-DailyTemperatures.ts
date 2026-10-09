const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures: number[]) {
  let max = 0

  for (const val of temperatures) {
    if (max < val) max = val
  }

  const result = new Array(temperatures.length).fill(0)

  for (let i = temperatures.length - 2; i >= 0; i--) {
    const current = temperatures[i]
    if (current === max) continue

    let j = i + 1
    while (temperatures[j] <= current && result[j] !== 0) {
      j += result[j]
    }

    if (temperatures[j] > current) result[i] = j - i
  }

  return result
}

console.log(dailyTemperatures(temperatures))

// A ideia central é: o result já calculado funciona como um atalho. Como o loop vai de trás pra frente, quando você está no dia i, todos os dias à direita já têm a resposta pronta.

// O que result[j] significa

// result[j] diz “a partir do dia j, quantos dias até ficar mais quente que temperatures[j]”. Ou seja, j + result[j] é o próximo dia mais quente que o dia j.

// Por que dá pra pular

// Suponha que temperatures[j] <= current, ou seja, o dia j não serve pra você. Os dias entre j e j + result[j] são todos menores ou iguais a temperatures[j] (senão o result[j] seria menor). E se eles são <= ao dia j, que já é <= current, eles também não servem pra você.

// Então não precisa olhar um por um: pula direto para j + result[j], que é o primeiro dia que pode ser mais quente.

// Exemplo
// índice:        0   1   2   3   4   5   6   7
// temperatures: 73  74  75  71  69  72  76  73

// Quando o loop chega em i = 2 (75), os da direita já estão calculados:

// result[3] = 2   (71 → próximo mais quente é o 72, no índice 5)
// result[4] = 1   (69 → 72, no índice 5)
// result[5] = 1   (72 → 76, no índice 6)
// result[6] = 0   (76 é o máximo)

// O while faz isto:

// j = 3 → 71 <= 75, e result[3] = 2, então j = 3 + 2 = 5 (pulou o índice 4)
// j = 5 → 72 <= 75, e result[5] = 1, então j = 5 + 1 = 6
// j = 6 → 76 > 75, o while para

// O if confirma que 76 > 75, então result[2] = 6 - 2 = 4.

// As duas condições do while

// Ele continua enquanto as duas forem verdadeiras:

// temperatures[j] <= current: o dia j ainda não é mais quente, então tem que continuar procurando.
// result[j] !== 0: existe um próximo dia mais quente que j pra onde pular. Se for 0, não existe nenhum dia mais quente que j depois dele, e como j já é <= current, também não existe nenhum pra i. Aí não adianta continuar.
// Por que o if depois

// O while pode parar por dois motivos:

// achou um dia mais quente (temperatures[j] > current) → o if grava j - i
// ficou sem atalho (result[j] === 0) → o if é falso e result[i] fica 0, que já é o valor inicial

// O if serve justamente pra saber qual dos dois aconteceu.
