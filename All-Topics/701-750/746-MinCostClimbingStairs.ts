const cost = [10, 15, 20]

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost: number[]) {
  let prev1 = cost[1]
  let prev2 = cost[0]

  for (let i = 2; i < cost.length; i++) {
    const current = cost[i] + Math.min(prev1, prev2)
    prev2 = prev1
    prev1 = current
  }

  return Math.min(prev1, prev2)
}

console.log(minCostClimbingStairs(cost))

/* 
🔢 Problema:
Você tem um array cost, onde cada posição representa o custo de um degrau da escada. Você pode subir 1 ou 2 degraus de cada vez, começando no degrau 0 ou 1. A ideia é chegar ao topo com o menor custo possível.

🧠 Ideia principal:
Em vez de calcular o custo total pra cada caminho, a gente vai calcular o custo mínimo pra chegar em cada degrau, um por um, e ir guardando só os dois últimos resultados (porque você só pode vir de 1 ou 2 degraus antes).

🪜 Exemplo visual:
Imagine cost = [10, 15, 20]:

Degrau 0: custa 10

Degrau 1: custa 15

Degrau 2: custa 20

A gente quer saber: qual o menor custo total pra subir até o topo, que fica após o último degrau.

🔍 Agora o código:

let prev1 = cost[1];  // custo mínimo pra chegar no degrau 1
let prev2 = cost[0];  // custo mínimo pra chegar no degrau 0
Essas duas variáveis são os pontos de partida. Você pode começar do degrau 0 ou 1.


for (let i = 2; i < cost.length; i++) {
    const current = cost[i] + Math.min(prev1, prev2);
current é o custo mínimo pra chegar no degrau i.

Pra isso, você pode vir de:

i - 1 (pagando prev1),

ou i - 2 (pagando prev2).

Então, pega o menor desses dois e soma com o custo atual (cost[i]).


    prev2 = prev1;
    prev1 = current;
Atualiza os valores: o que era prev1 vira prev2, e o current vira o novo prev1.

Isso move a janela pra frente.

return Math.min(prev1, prev2);
No final, o topo está após o último degrau, então você pode chegar nele vindo do último (n - 1) ou do penúltimo (n - 2) degrau.

Então você pega o menor custo entre esses dois.

✅ Resumindo:
Você calcula o menor custo para chegar em cada degrau.

No final, retorna o menor custo pra sair do último ou penúltimo degrau e subir pro topo.

*/
