const s = "abcabcbb";

function lengthOfLongestSubstring(s: string): number {
  let result = 0;
  let string = "";

  for (let index = 0; index < s.length; index++) {
    const letter = s[index];
    if (!string.includes(letter)) {
      string += letter;
      if (string.length > result) {
        result = string.length;
      }
    } else {
      const letterIndex = string.indexOf(letter);
      const partialString = string.slice(letterIndex + 1, string.length);
      string = partialString + letter;
      if (string.length > result) {
        result = string.length;
      }
    }
  }
  console.log(string);
  return result;
}

console.log(lengthOfLongestSubstring(s));
