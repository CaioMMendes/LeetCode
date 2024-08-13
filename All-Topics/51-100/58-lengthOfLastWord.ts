const s = "   fly me   to   the moon  ";

const lengthOfLastWord = function (s: string) {
  const splited = s.trim().split(" ").pop()?.length;
  //   const arrayWithoutSpaces = splited.filter((string) => string !== "");
  //   return arrayWithoutSpaces[arrayWithoutSpaces.length - 1].length;
  return splited;
};

console.log(lengthOfLastWord(s));
