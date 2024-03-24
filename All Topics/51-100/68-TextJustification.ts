const words = ["What", "must", "be", "acknowledgment", "shall", "be"],
  maxWidth = 16;
console.log("-----------------------------------------");

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words: string[], maxWidth: number) {
  const result: string[] = [];
  let line: string[] = [];
  let count = 0;

  while (words?.length > 0) {
    const element = words.splice(0, 1)[0];
    const elementLength = element?.length;

    if (count + elementLength + line.length <= maxWidth) {
      line.push(element);
      count += elementLength;
    } else {
      const espacosPadrao = Math.floor(
        (maxWidth - count) / (line.length - 1 === 0 ? 1 : line.length - 1)
      );
      const espacosMais =
        (maxWidth - count) % (line.length - 1 === 0 ? 1 : line.length - 1);

      result.push(getSpaces(line, espacosPadrao, espacosMais));
      line = [element];
      count = elementLength;
    }

    if (words.length === 0) {
      const lastLine = line.join(" ").padEnd(maxWidth, " ");
      result.push(lastLine);
    }
  }

  return result;

  function getSpaces(
    line: string[],
    espacosPadrao: number,
    espacosMais: number
  ) {
    console.log("string", espacosPadrao, espacosMais);
    const result = line.map((string, index) => {
      const spaces = "";
      const espacosNumber = espacosMais;
      espacosMais--;

      if (index === line.length - 1) {
        if (line.length === 1) {
          return string.padEnd(maxWidth, " ");
        }
        return string;
      }
      return (string += spaces.padEnd(
        espacosPadrao + (espacosNumber > 0 ? 1 : 0),
        " "
      ));
    });
    return result.join("");
  }
};

console.log(fullJustify(words, maxWidth));
