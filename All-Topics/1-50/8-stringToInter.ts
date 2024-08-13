const s = "  987";

const myAtoi = function (s: string) {
  const match = s.match(/^\s*([-+]?\d+)(?:\D|$)/);
  if (!match) return 0;
  let result = parseInt(match[1], 10);
  result = Math.max(Math.min(result, 2 ** 31 - 1), -(2 ** 31));
  return result;
};

console.log(myAtoi(s));
