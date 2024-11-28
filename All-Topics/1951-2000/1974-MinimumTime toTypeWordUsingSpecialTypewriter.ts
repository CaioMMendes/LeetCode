const word = "abc"

/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word: string) {
  const alphabet: Record<string, number> = {
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

  const length = word.length
  let current = "a"
  let result = 0

  for (let i = 0; i < length; i++) {
    const currentNumber = alphabet[current]
    const targetNumber = alphabet[word[i]]

    if (Math.abs(targetNumber - currentNumber) > 12) {
      const math = 25 - Math.abs(targetNumber - currentNumber) + 1
      result += math
    } else {
      const math = Math.abs(targetNumber - currentNumber)
      result += math
    }
    current = word[i]
    result++
  }
  return result
}

console.log(minTimeToType(word))
