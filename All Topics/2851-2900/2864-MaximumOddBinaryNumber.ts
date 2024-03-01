const s = "00101";

/***
 * @param {string} s
 * @return {string}
 * */
const maximumOddBinaryNumber = function (s: string) {
  const filtered = s.split("").filter((number) => number === "1");
  let string = "1";

  if (filtered.length === 1) {
    return string.padStart(s.length, "0");
  }
  if (filtered.length === 0) {
    return s;
  }
  filtered.shift();
  return filtered.join("") + string.padStart(s.length - filtered.length, "0");
};

console.log(maximumOddBinaryNumber(s));
