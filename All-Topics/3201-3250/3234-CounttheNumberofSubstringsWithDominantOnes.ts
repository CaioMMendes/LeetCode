const s = "00011"

/**
 * @param {string} s
 * @return {number}
 */
// ? Não passou na performance
// var numberOfSubstrings = function(s) {
//     let result=0

//     for(let i=0;i<s.length;i++){

//         const count={
//             '0':0,
//             '1':0
//         }
//         for(let j=i;j<s.length;j++){
//             if(count['0']>200)break
//             if(s[j]==='0'){
//                 count['0']++
//             }else{
//                 count['1']++
//             }
//             if(count['1']>=(count['0']**2)){
//                 result++}
//         }
//     }

//     return result

// };

var numberOfSubstrings = function (s: string) {
  // counts[0] = total de zeros até aqui
  // counts[1] = total de ones até aqui
  let counts = [0, 0]

  // c1[k] = quantidade de ones até o k-ésimo zero
  // Começa com um 0 para facilitar contas
  let c1 = [0]

  let result = 0

  // Percorre a string da esquerda para a direita
  for (const c of s) {
    // Atualiza prefixo de zeros/ones
    counts[c === "0" ? 0 : 1]++

    // Se achamos um zero, registramos
    // quantos ones temos nesse ponto
    if (c === "0") {
      c1.push(counts[1])
    }

    // -------------------------------------------
    // 1) Substrings terminando aqui com ZERO zeros
    // -------------------------------------------
    // Quantos substrings terminam aqui e começam
    // depois do último zero? -> Só com ones!
    //
    // totalOnes - onesAtéUltimoZero
    //
    // counts[0] = total de zeros até aqui
    // c1[counts[0]] = ones no ponto do último zero
    //
    result += counts[1] - c1[counts[0]]

    // -------------------------------------------
    // 2) Substrings terminando aqui com >= 1 zeros
    // Vamos andar para trás nos zeros
    // c0 = índice do zero anterior
    // -------------------------------------------

    // Vamos considerar substrings com:
    // 1 zero, depois 2 zeros, ..., até quando valer a pena
    for (let c0 = counts[0] - 1; c0 >= 0; c0--) {
      // num0 = quantos zeros queremos no substring
      let num0 = counts[0] - c0

      // CONDIÇÃO DO PROBLEMA:
      // ones >= zeros²  --> ones >= num0 * num0
      //
      // Se mesmo usando TODOS os ones acumulados até aqui
      // não for possível atender a condição,
      // então nunca será possível para substrings maiores.
      if (num0 * num0 > counts[1]) break

      // hi = total de ones desde o c0-ésimo zero até aqui
      let hi = counts[1] - c1[c0]

      // lo = total de ones desde o (c0+1)-ésimo zero até aqui
      // (isso serve para delimitar o intervalo de onde podemos começar o substring)
      let lo = counts[1] - c1[c0 + 1]

      // Se nem o intervalo HI atende a condição zeros²,
      // então não temos substrings válidos aqui
      if (hi < num0 * num0) continue

      // Contar quantos valores entre "lo" e "hi"
      // são >= num0².
      //
      // Isso já soma vários substrings de uma vez,
      // sem precisar enumerar i..j.
      //
      result += Math.max(0, hi - Math.max(lo, num0 * num0) + 1)
    }
  }

  return result
}

console.log(numberOfSubstrings(s))
