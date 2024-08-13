const haystack = "sadbutsad",
  needle = "sad";

const strStr = function (haystack: string, needle: string) {
  return haystack.indexOf(needle);
};

console.log(strStr(haystack, needle));
