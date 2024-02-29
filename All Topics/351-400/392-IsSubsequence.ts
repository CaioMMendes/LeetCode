const s = "b";
const t = "c";

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s: string, t: string) => {
  const splitedT = t.split("");
  let indexes = {};
  for (let index = 0; index < splitedT.length; index++) {
    const number = splitedT[index];
    if (Object.keys(indexes).includes(number)) {
      indexes = { ...indexes, [number]: [...indexes[number], index] };
    } else {
      indexes = { ...indexes, [number]: [index] };
    }
  }
  let result = true;
  let lastIndex = -15;
  let word = "";
  for (let index = 0; index < s.length; index++) {
    // const currentIndex = splitedT.indexOf(s[index]);
    console.log("a");
    let currentIndex = -20;
    for (let k = 0; k < indexes[s[index]]?.length; k++) {
      if (indexes[s[index]][k] > lastIndex) {
        currentIndex = indexes[s[index]][k];
        k = +Infinity;
      }
    }
    console.log("c", currentIndex);
    if (currentIndex >= lastIndex) {
      const spliced = splitedT.splice(currentIndex, 1);
      console.log(splitedT);
      word += spliced;

      lastIndex = currentIndex;
    } else {
      result = false;
      break;
    }
  }
  console.log(indexes);
  return result;
};

console.log(isSubsequence(s, t));
