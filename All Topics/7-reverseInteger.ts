const x = -120;

const reverse = function (x: number) {
  let string = String(x);
  let signal = "";
  if (isNaN(Number(string[0]))) {
    signal = string.slice(0, 1);
    string = string.slice(1);
  }
  string = signal + string.split("").reverse().join("");
  const number = Number(string);
  const lowerRange = (-2) ** 31;
  const upperRange = 2 ** 31 - 1;
  if (number >= lowerRange && number <= upperRange) {
    return Number(string);
  }
  return 0;
};

console.log(reverse(x));
