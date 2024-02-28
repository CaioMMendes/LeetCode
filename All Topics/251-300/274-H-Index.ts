const citations = [3, 0, 6, 1, 5];

/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = (citations: number[]) => {
  const filteredNumbers = citations.filter((number) => number !== 0);
  const sortedNumbers = filteredNumbers.sort((a, b) => a - b);
  const unique = [...new Set(filteredNumbers)];
  for (let index = 0; index < unique.length; index++) {
    const number = unique[unique.length - 1 - index];
    const numberIndex = sortedNumbers.indexOf(number);
    if (number < filteredNumbers.length) {
      //   for (let k = 0; k < filteredNumbers.length; k++) {

      //   }
      let x = filteredNumbers.length;
      while (x > 0) {
        let count = 0;
        for (let k = 0; k < filteredNumbers.length; k++) {
          filteredNumbers[k] >= x && count++;
          if (count >= x) {
            return x;
          }
        }
        x--;
      }
    } else {
      if (filteredNumbers.length - numberIndex >= number) {
        return number;
      }
    }
  }
  return filteredNumbers.length;
};

console.log(hIndex(citations));
