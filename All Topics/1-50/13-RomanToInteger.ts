const s = "LVIII";

var romanToInt = function (s: string) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const splited = s.split("");
  let total = 0;
  let current = 0;

  for (let i = 0; i < splited.length; i++) {
    if (values[splited[i]] < values[splited[i + 1]]) {
      current = values[splited[i]];
    } else {
      total += values[splited[i]] - current;
      current = 0;
    }
  }
  return total;
};

console.log(romanToInt(s));
