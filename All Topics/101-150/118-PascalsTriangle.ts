const numRows = 5;

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows: number) {
  if (numRows === 1) {
    return [[1]];
  }
  if (numRows === 2) {
    return [[1], [1, 1]];
  }

  const result = [[1], [1, 1]];
  for (let index = 0; index < numRows - 2; index++) {
    const lastArray = result[result.length - 1];
    const element = [1];
    for (let j = 0; j < lastArray.length - 1; j++) {
      const number = lastArray[j] + lastArray[j + 1];
      element.push(number);
    }
    element.push(1);
    result.push(element);
  }
  return result;
};

console.log(generate(numRows));
