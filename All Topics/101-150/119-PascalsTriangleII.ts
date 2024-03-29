const rowIndex = 3;

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex: number) {
  let array: number[] = [1];

  for (let index = 0; index < rowIndex; index++) {
    array.push(1);
    const tempArray = array.slice();
    for (let j = 0; j < array.length - 2; j++) {
      const element = tempArray[j] + tempArray[j + 1];
      array[j + 1] = element;
    }
  }
  return array;
};

console.log(getRow(rowIndex));
