const words = ["gin", "zen", "gig", "msg"]

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words: string[]) {
  const morse = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  }

  const codes: string[] = []

  const wordsLength = words.length

  for (let i = 0; i < wordsLength; i++) {
    const element = words[i]
    const elementLength = element.length
    let code = ""

    for (let j = 0; j < elementLength; j++) {
      const word = element[j]
      code += morse[word]
    }

    codes.push(code)
  }
  const unique = [...new Set(codes)]

  return unique.length
}

console.log(uniqueMorseRepresentations(words))
