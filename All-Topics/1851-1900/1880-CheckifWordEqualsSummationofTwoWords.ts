const firstWord = "acb",
  secondWord = "cba",
  targetWord = "cdb"

/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (
  firstWord: string,
  secondWord: string,
  targetWord: string
) {
  const alphabetIndex: Record<string, number> = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  }
  return sum(firstWord) + sum(secondWord) === sum(targetWord)

  function sum(string: string) {
    let sum = ""

    for (let i = 0; i < string.length; i++) {
      sum += alphabetIndex[string[i]]
    }
    return Number(sum)
  }
}

console.log(isSumEqual(firstWord, secondWord, targetWord))
