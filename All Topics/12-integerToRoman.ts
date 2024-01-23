const num = 1994;

const intToRoman = function (num: number) {
  const values = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  const splitedNumber = String(num).split("");

  const numbersToConvert = splitedNumber.map((number, index) => {
    return Number(number) * (1 * 10 ** (splitedNumber.length - 1 - index));
  });
  console.log(numbersToConvert);

  const numbersConverted = numbersToConvert.map((number) => {
    let num = "";
    let numberToDecrease = number;
    let upperNumber = "";
    while (numberToDecrease !== 0) {
      if (String(number)[0] === "9" || String(number)[0] === "4") {
        for (const key in values) {
          if (numberToDecrease >= values[key]) {
            const keysArray = Object.keys(values);
            const index = keysArray.indexOf(key);
            String(number)[0] === "4" && (num += `${key}${upperNumber}`);
            String(number)[0] === "9" &&
              (num += `${keysArray[index + 1]}${upperNumber}`);
            numberToDecrease = 0;
            break;
          } else {
            upperNumber = key;
          }
        }
      } else {
        for (const key in values) {
          if (numberToDecrease >= values[key]) {
            numberToDecrease -= values[key];
            num += key;
            break;
          }
        }
      }
    }
    return num;
  });
  return numbersConverted.join("");
};

console.log(intToRoman(num));
