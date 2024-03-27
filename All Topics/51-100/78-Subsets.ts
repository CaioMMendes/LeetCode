const nums = [1, 2, 3, 4];

console.log("------------------------------------------");

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums: number[]) {
  //TODO ESTE CODIGO ESTÁ CERTO, PORÉM, RETORNA EM UMA ORDEM DIFERENTE E NO EXERCICIO FALA QUE PODE SER EM QUALQUER ORDEM
  //TODO APARENTEMENTE NÃO PODIA, USE O CODIGO DA FUNÇÃO COMENTADA PARA PASSAR
  const result: number[][] = [];
  result.push([]);
  const numbers: number[] = [];
  while (nums.length > 0) {
    let x = 1;
    const element = nums.splice(0, 1);
    result.push(element);
    numbers.push(...element);
    const restNumbers = nums.slice();
    const restNumbersWhile = restNumbers.slice();
    const numberResult = [...element];
    while (numberResult.length - x !== nums.length) {
      for (let index = 0; index < restNumbersWhile.length; index++) {
        const element = restNumbersWhile[index];
        result.push([...numberResult, element].sort((a, b) => a - b));
      }
      const elementWhile = restNumbersWhile.splice(0, 1);
      numberResult.push(...elementWhile);
    }
    x++;
  }

  return result;
};

console.log(subsets(nums));

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var subsets = function (nums) {
//     let sets = [];

//     if (nums.length === 0) {
//         return [[]];
//     } else {
//         let subsetsCount = 2 ** nums.length;
//         for (let i = 0; i < subsetsCount; i++) {

//             let subset = new Set();
//             for (let j = 0; j < nums.length; j++) {
//                 if (getBit(i, j) == 1 && !subset.has(nums[j])) {
//                     subset.add(nums[j]);
//                 }
//             }

//             if (i === 0) {
//                 sets.push([]);
//             } else {
//                 sets.push(Array.from(subset));
//             }

//         }
//     }
//     return sets;
// };

// function getBit(num, bit) {
//     let temp;
//     temp = 1 << bit;
//     temp = temp & num;

//     if (temp === 0) {
//         return 0;
//     }

//     return 1;
// }
