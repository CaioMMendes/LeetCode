const nums = [0, 0, 1, 1, 11, 2, 2, 3, 3, 4];

type NumberWithString = number | string;

var removeDuplicates = function (nums: NumberWithString[]) {
  const unique: NumberWithString[] = [];
  let tamanho = nums.length;
  for (let index = 0; index < tamanho; index++) {
    const number = Number(nums[index]);

    if (!unique.includes(number)) {
      unique.push(number);
    } else {
      // console.log(index, nums);
      nums.splice(index, 1);
      index--;
      tamanho--;
    }
    // console.log("indice", index);
  }
  console.log(nums);
  return unique.length;
};

console.log(removeDuplicates(nums));
