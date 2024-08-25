const letters = ["c", "f", "j"],
  target = "a"

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters: string[], target: string) {
  const set = new Set([...letters])
  let result = ""
  set.forEach((val) => {
    if (val.charCodeAt(0) > target.charCodeAt(0) && result === "") {
      result = val
    }
  })
  return result !== "" ? result : letters[0]
}

console.log(nextGreatestLetter(letters, target))
