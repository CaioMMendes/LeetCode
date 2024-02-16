const n = 6;

type MatrixType = number | string;

const generateMatrix = function (n: number) {
  const matrix = zerosMatrix(n);
  let number = 1;

  for (let vezes = 0; vezes < Math.floor(n / 2); vezes++) {
    for (let primeirox = 0; primeirox < n - vezes * 2; primeirox++) {
      matrix[0 + vezes][primeirox + vezes] = number;
      number++;
    }
    for (let primeiroy = 0; primeiroy < n - 1 - vezes * 2; primeiroy++) {
      matrix[primeiroy + 1 + vezes][n - 1 - vezes] = number;
      number++;
    }
    for (let segundox = 0; segundox < n - 1 - vezes * 2; segundox++) {
      matrix[n - 1 - vezes][n - 1 - 1 - segundox - vezes] = number;
      number++;
    }
    for (let segundoy = 0; segundoy < n - 2 - vezes * 2; segundoy++) {
      matrix[n - 1 - 1 - segundoy - vezes][0 + vezes] = number;
      number++;
    }
  }

  if (n % 2 !== 0) {
    const metade = Math.floor(n / 2);
    matrix[metade][metade] = number;
  }
  return matrix;

  function zerosMatrix(n) {
    let matrix: number[][] = [];
    for (let i = 0; i < n; i++) {
      let row: number[] = [];
      for (let j = 0; j < n; j++) {
        row.push(0);
      }
      matrix.push(row);
    }
    return matrix;
  }
};

console.log(generateMatrix(n));
