const order = "disqyr",
  s = "iwyrysqrdj";

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order: string, s: string) {
  const splitedS = s.split("");
  const splitedOrder = order.split("");
  let result = "";
  let letters = {};
  for (let index = 0; index < splitedS.length; index++) {
    const element = splitedS[index];
    const keys = Object.keys(letters);

    if (keys.includes(element)) {
      letters = { ...letters, [element]: letters[element] + 1 };
    } else {
      letters = { ...letters, [element]: 1 };
    }
  }

  for (let index = 0; index < order.length; index++) {
    const element = order[index];
    if (s.includes(element)) {
      splitedOrder.shift();
      const addString = "".padStart(letters[element], element);
      result += addString;
    }
  }
  for (let index = 0; index < splitedS.length; index++) {
    const element = splitedS[index];
    if (!result.includes(element)) {
      const addString = "".padStart(letters[element], element);
      result += addString;
    }
  }

  return result;
};

console.log(customSortString(order, s));
