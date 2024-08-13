// const s = "abab";
const s = "A man, a plan, a canal: Panama";

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s: string) {
  let result = true;
  const regex = /[^a-zA-Z0-9]/g;
  const cleanText = s.toLowerCase().replace(regex, "");
  console.log(cleanText);
  const half = Math.floor(cleanText.length / 2);
  for (let index = 0; index < half; index++) {
    if (cleanText[index] !== cleanText[cleanText.length - index - 1]) {
      result = false;
      break;
    }
  }
  return result;
};

console.log(isPalindrome(s));
