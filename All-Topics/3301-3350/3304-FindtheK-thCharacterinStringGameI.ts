const k = 5

/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k: number) {
  let word = "a"

  const alphabet: Record<string, string> = {
    a: "b",
    b: "c",
    c: "d",
    d: "e",
    e: "f",
    f: "g",
    g: "h",
    h: "i",
    i: "j",
    j: "k",
    k: "l",
    l: "m",
    m: "n",
    n: "o",
    o: "p",
    p: "q",
    q: "r",
    r: "s",
    s: "t",
    t: "u",
    u: "v",
    v: "w",
    w: "x",
    x: "y",
    y: "z",
    z: "a",
  }

  while (word[k - 1] === undefined) {
    const generate = word
      .split("")
      .map((letter) => alphabet[letter])
      .join("")
    word += generate
  }
  return word[k - 1]
}

console.log(kthCharacter(k))
