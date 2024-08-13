const nums = [4, 1, 2, 1, 2];

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums: number[]) {
  let numbers = {};

  for (const element of nums) {
    numbers[element] = (numbers[element] || 0) + 1;
  }

  let result = 0;
  for (const keys in numbers) {
    if (numbers[keys] === 1) {
      result = Number(keys);
      break;
    }
  }
  return result;
};

console.log(singleNumber(nums));

//   const numbers = new Map();

//   // Contagem de ocorrências de cada número
//   for (const num of nums) {
//     if (numbers.has(num)) {
//       numbers.set(num, numbers.get(num)! + 1);
//     } else {
//       numbers.set(num, 1);
//     }
//   }
//   console.log(numbers);

//   // Encontrar o número único
//   for (const [key, value] of numbers.entries()) {
//     if (value === 1) {
//       return key;
//     }
//   }

//   return 0; // Retornar 0 caso nenhum número único seja encontrado
