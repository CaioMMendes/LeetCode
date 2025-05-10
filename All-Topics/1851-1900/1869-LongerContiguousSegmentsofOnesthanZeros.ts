const s = "1101"

/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s: string) {
  const matchOnes = s.match(/(1)\1*/g)
  const matchZeros = s.match(/(0)\1*/g)
  const maxOne = matchOnes?.reduce((acc, cur) => {
    if (cur.length > acc) {
      return cur.length
    }
    return acc
  }, 0)
  const maxZero = matchZeros?.reduce((acc, cur) => {
    if (cur.length > acc) {
      return cur.length
    }
    return acc
  }, 0)
  return (maxOne ?? 0) > (maxZero ?? 0)
}

console.log(checkZeroOnes(s))
