const strs = ["flower", "flow", "flight"];

var longestCommonPrefix = function (strs: string[]) {
  let bigger = "";
  let current = "";
  strs.map((string, index, array) => {
    current = "";
    //retorna para não dar merda na hora de comparar
    if (index === strs.length - 1) {
      if (strs.length === 1) {
        bigger = strs[0];
      }
      return;
    }

    for (let i = 0; i < string.length; i++) {
      // console.log(array[index + 1][i]);
      // console.log(string[i]);
      if (string[i] === array[index + 1][i]) {
        current += string[i];
      } else {
        break;
      }
    }
    if (index === 0) {
      bigger = current;
    } else if (bigger.length > current.length) {
      bigger = current;
    }
  });
  return bigger;
};

console.log(longestCommonPrefix(strs));
