const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

var merge = function (nums1: number[], m: number, nums2: number[], n: number) {
  for (let i = 0; i < m + n; i++) {
    if (nums1[i] >= nums2[0]) {
      nums1.splice(i, 0, nums2[0]);
      nums1.pop();
      nums2.shift();
    }

    if (i === m + n - 1) {
      for (let a of nums2) {
        nums1.pop();
      }
      nums1.push(...nums2);
    }
  }

  return nums1;
};

console.log(merge(nums1, m, nums2, n));

//todo não pode resolver desse jeito
// var merge = function (nums1: number[], m: number, nums2: number[], n: number) {
//   const result: number[] = [];

//   const numero1 = nums1.splice(0, m);
//   const numero2 = nums2.splice(0, n);

//   for (let i = 0; i < n + m; i++) {
//     if (typeof numero1[0] !== "number") {
//       console.log("numero1 não é numero");
//       result.push(numero2[0]);
//       numero2.shift();
//     }
//     if (typeof numero2[0] !== "number") {
//       console.log("numero2 não é numero");
//       result.push(numero1[0]);
//       numero1.shift();
//     }
//     if (typeof numero2[0] === "number" && typeof numero1[0] === "number") {
//       if (numero1[0] >= numero2[0]) {
//         console.log("numero1 maior");
//         result.push(numero2[0]);
//         numero2.shift();
//       }
//       if (numero1[0] < numero2[0]) {
//         console.log("numero2 maior");
//         result.push(numero1[0]);
//         numero1.shift();
//       }
//     }
//   }

//   return result.filter((num) => num);
// };
