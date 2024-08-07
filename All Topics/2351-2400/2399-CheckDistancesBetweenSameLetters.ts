const s = "abaccb",
  distance = [
    1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0,
  ]

/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s: string, distance: number[]) {
  const obj = {}
  const sLength = s.length
  const distanceLength = distance.length

  const letters = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
    10: "k",
    11: "l",
    12: "m",
    13: "n",
    14: "o",
    15: "p",
    16: "q",
    17: "r",
    18: "s",
    19: "t",
    20: "u",
    21: "v",
    22: "w",
    23: "x",
    24: "y",
    25: "z",
  }

  for (let i = 0; i < sLength; i++) {
    const element = s[i]
    if (obj[element] !== undefined) {
      obj[element] = i - 1 - obj[element]
    } else {
      obj[element] = i
    }
  }

  for (let i = 0; i < distanceLength; i++) {
    const distanceValue = distance[i]
    if (obj[letters[i]] === undefined) {
      continue
    }
    if (obj[letters[i]] !== distanceValue) return false
  }

  return true
}

console.log(checkDistances(s, distance))
