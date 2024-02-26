const s = "e";

const isNumber = function (s: string) {
  const regex = /^[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?$/;
  return regex.test(s);
};

console.log(isNumber(s));
