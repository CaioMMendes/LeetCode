const words = ["abcd", "def", "xyz"],
  weights = [
    5, 3, 12, 14, 1, 2, 3, 2, 10, 6, 6, 9, 7, 8, 7, 10, 8, 9, 6, 9, 9, 8, 3, 7,
    7, 2,
  ]

/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function (words: string[], weights: number[]) {
  const letterToNumber: Record<string, number> = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  }

  const numberToLetter: Record<string, string> = {
    "0": "z",
    "1": "y",
    "2": "x",
    "3": "w",
    "4": "v",
    "5": "u",
    "6": "t",
    "7": "s",
    "8": "r",
    "9": "q",
    "10": "p",
    "11": "o",
    "12": "n",
    "13": "m",
    "14": "l",
    "15": "k",
    "16": "j",
    "17": "i",
    "18": "h",
    "19": "g",
    "20": "f",
    "21": "e",
    "22": "d",
    "23": "c",
    "24": "b",
    "25": "a",
  }

  const numbers = words.map((str) => {
    let sum = 0

    for (let i = 0; i < str.length; i++) {
      const letterIndex = letterToNumber[str[i]]
      sum += weights[letterIndex - 1]
    }

    return sum % 26
  })

  let result = ""

  for (const val of numbers) {
    result += numberToLetter[val]
  }

  return result
}

console.log(mapWordWeights(words, weights))
