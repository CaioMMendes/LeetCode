const n = 3,
  k = 1

/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n: number, k: number) {
  let string = "0"

  for (let i = 1; i < n; i++) {
    string =
      string +
      "1" +
      string
        .replace(/[01]/g, (match) => {
          return match === "0" ? "1" : "0"
        })
        .split("")
        .reverse()
        .join("")
  }

  return string[k - 1]
}

console.log(findKthBit(n, k))
