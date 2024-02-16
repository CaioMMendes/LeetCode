const n = 4;

var countAndSay = function (n: number) {
  // Caso base: Quando n é 1, retornamos '1'
  if (n === 1) {
    return "1";
  }

  // Função auxiliar para gerar o próximo termo da sequência
  function getNextTerm(term) {
    console.log(term);
    let result = "";
    let count = 1;

    // Percorre o termo atual para gerar o próximo termo
    for (let i = 0; i < term.length; i++) {
      if (term[i] === term[i + 1]) {
        count++;
      } else {
        result += count + term[i];
        count = 1;
      }
    }

    return result;
  }

  // Chamada recursiva para obter o termo anterior
  //nessa parte que faz a recursão parar
  let prevTerm = countAndSay(n - 1);
  console.log("prevTerm", prevTerm);
  // Retorna o próximo termo da sequência com base no termo anterior
  return getNextTerm(prevTerm);
};

console.log(countAndSay(n));
