const s = "a0b1c2"

/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s: string) {
  const letters = s.match(/\D/g)
  const numbers = s.match(/\d/g)

  const dif = Math.abs(
    (letters?.length ? letters.length : 0) -
      (numbers?.length ? numbers.length : 0)
  )
  if (dif > 1) return ""

  const max = Math.max(
    letters?.length ? letters.length : 0,
    numbers?.length ? numbers.length : 0
  )
  let result = ""
  if ((letters?.length ?? 0) >= (numbers?.length ?? 0)) {
    for (let i = 0; i < max; i++) {
      result += letters[i] ? letters[i] : ""
      if (i < numbers?.length) {
        result += numbers[i] ? numbers[i] : ""
      }
    }
  } else {
    for (let i = 0; i < max; i++) {
      result += numbers[i] ? numbers[i] : ""
      if (i < letters?.length) {
        result += letters[i] ? letters[i] : ""
      }
    }
  }

  return result
}

console.log(reformat(s))
