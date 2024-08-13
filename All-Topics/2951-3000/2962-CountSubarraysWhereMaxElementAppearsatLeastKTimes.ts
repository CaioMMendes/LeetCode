// const nums = [1, 3, 2, 3, 3],
const nums = [
    61, 23, 38, 23, 56, 40, 82, 56, 82, 82, 82, 70, 8, 69, 8, 7, 19, 14, 58, 42,
    82, 10, 82, 78, 15, 82,
  ],
  k = 2;
console.log("-------------------------------------------------");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums: number[], k: number) {
  const max = Math.max(...nums);
  let result = 0;
  let count = 0;
  let start = 0;

  for (let end = 0; end < nums.length; end++) {
    if (nums[end] === max) {
      count++;
    }

    while (count >= k) {
      result += nums.length - end;

      if (nums[start] === max) {
        count--;
      }

      start++;
    }
  }

  return result;
};

// //todo da erro de timeout
// var countSubarrays = function (nums: number[], k: number) {
//   const max = Math.max(...nums);
//   const numbers: number[] = [];
//   let result = 0;
//   let count = 0;
//   const slicedNumbers = nums.slice().length;
//   for (let index = 0; index < slicedNumbers && slicedNumbers >= k; index++) {
//     const element = nums.splice(0, 1)[0];
//     const numsLength = nums.length;
//     if (element === max) {
//       count++;
//     }

//     numbers.push(element);

//     if (count >= k) {
//       result += 1 + numsLength;

//       for (; k <= numbers.length; ) {
//         const elementJ = numbers.splice(0, 1)[0];
//         if (elementJ === max) {
//           count--;
//         }
//         if (count >= k) {
//           result += 1 + numsLength;
//         } else {
//           break;
//         }
//       }
//     }
//   }

//   return result;
// };

console.log(countSubarrays(nums, k));
