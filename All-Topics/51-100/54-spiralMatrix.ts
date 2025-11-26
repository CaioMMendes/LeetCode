// const matrix = [[7], [9], [6]];
const matrix = [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]
// const matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];
console.log("------------------------")
var spiralOrder = function (matrix: number[][]) {
  const array: number[] = []
  const matrixXlength = matrix[0].length
  const matrixYlength = matrix.length
  console.log(matrixXlength, matrixYlength)
  for (let vezes = 0; vezes < Math.ceil(matrix.length / 2); vezes++) {
    for (let i = 0; i < matrixXlength - vezes * 2; i++) {
      array.push(matrix[vezes][i + vezes])
    }
    if (Math.ceil(matrixXlength / 2) > vezes) {
      for (let i = 0; i < matrixYlength - 1 - vezes * 2; i++) {
        console.log("first")
        array.push(matrix[i + vezes + 1][matrixXlength - 1 - vezes])
      }
    }
    if (Math.floor(matrixYlength / 2) > vezes) {
      for (let i = 0; i < matrixXlength - 1 - vezes * 2; i++) {
        array.push(
          matrix[matrixYlength - 1 - vezes][matrixXlength - 1 - vezes - i - 1]
        )
      }
    }
    if (Math.floor(matrixXlength / 2) > vezes) {
      for (let i = 0; i < matrixYlength - 2 - vezes * 2; i++) {
        array.push(matrix[matrixYlength - 1 - vezes - 1 - i][vezes])
      }
    }
    console.log(array)
  }
  return array
}

console.log(spiralOrder(matrix))

//? Outra forma de resolver
// /**
//  * @param {number[][]} matrix
//  * @return {number[]}
//  */
// var spiralOrder = function(matrix) {

//     const result=[]

//     while(matrix.length>0){
//         result.push(...matrix.splice(0,1)[0])

//         for(let i=0;i<matrix.length;i++){

//             const last=matrix[i].pop()
//             if(matrix[i].length===0){
//                 matrix.splice(i,1)
//                 i--
//             }
//             result.push(last)
//         }
//         if(matrix.length>0){
//             const reversed=matrix.splice(matrix.length-1,1)[0].reverse()
//             result.push(...reversed)
//         }

//         if(matrix.length>0){
//             for(let i=matrix.length-1;i>=0;i--){
//             const first=matrix[i].shift()
//             if(matrix[i].length===0){
//                 matrix.splice(i,1)
//             }
//             result.push(first)
//             }
//         }

//     }

//     return result

// };
