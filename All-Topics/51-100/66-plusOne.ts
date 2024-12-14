const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]

// const plusOne = function (digits: number[]) {
//   const string = digits.join("");

//   //todo precisa usar BigInt porque quando o número é muito grande o js perde precisão
//   //todo e depois de um certo numero de casas ele coloca tudo 0
//   const number = BigInt(string) + BigInt(1);
//   const array = String(number).split("");
//   return array;
// };

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits: number[]) {
  const string = digits.join("")
  const number = BigInt(string) + BigInt(1)
  const array = String(number).split("")
  return array.map(Number)
}

console.log(plusOne(digits))
