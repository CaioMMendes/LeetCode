// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
console.log("--------------------------------------");
const rotate = function (matrix: number[][]) {
  const metadeParaBaixo = matrix.length;
  const a = Math.floor(matrix.length / 2);
  for (let tres = 0; tres < a; tres++) {
    for (let i = 0; i < metadeParaBaixo - 1 - tres * 2; i++) {
      const firstNumber = matrix[i + tres][0 + tres];
      const lastNumber = matrix[matrix.length - 1 - tres][i + tres];
      // console.log(firstNumber, lastNumber);
      matrix[i + tres][0 + tres] = lastNumber;
      matrix[matrix.length - 1 - tres][i + tres] = firstNumber;
    }
    console.log(matrix);

    for (let i = 0; i < metadeParaBaixo - 1 - tres * 2; i++) {
      const firstNumber = matrix[matrix.length - 1 - tres][i + tres];
      const lastNumber =
        matrix[matrix.length - 1 - i - tres][matrix.length - 1 - tres];
      // console.log(firstNumber, lastNumber);
      matrix[matrix.length - 1 - tres][i + tres] = lastNumber;
      matrix[matrix.length - 1 - i - tres][matrix.length - 1 - tres] =
        firstNumber;
    }
    console.log(matrix);

    for (let i = 0; i < metadeParaBaixo - 1 - tres * 2; i++) {
      const firstNumber =
        matrix[matrix.length - 1 - i - tres][matrix.length - 1 - tres];
      const lastNumber = matrix[0 + tres][matrix.length - 1 - i - tres];
      console.log(firstNumber, lastNumber);
      matrix[matrix.length - 1 - i - tres][matrix.length - 1 - tres] =
        lastNumber;
      matrix[0 + tres][matrix.length - 1 - i - tres] = firstNumber;
    }
    console.log(matrix);
    console.log("============");
  }
};

console.log(rotate(matrix));

// const rotate = function (matrix: number[][]) {
//   const matrixInvertida = matrix.map((vetor) => {
//     return vetor.reverse();
//   });
//   const temp = transpose(matrixInvertida).reverse();
//   const result = temp.map((vetor) => {
//     return vetor.reverse();
//   });
//   return result;

//   function transpose(a) {
//     return Object.keys(a[0]).map(function (c) {
//       return a.map(function (r) {
//         return r[c];
//       });
//     });
//   }
// };
