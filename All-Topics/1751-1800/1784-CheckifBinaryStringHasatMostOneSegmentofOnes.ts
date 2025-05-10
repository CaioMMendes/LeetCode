const s = "1001"

/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s: string) {
  return (s.match(/1+/g)?.length ?? 0) < 2
}

console.log(checkOnesSegment(s))
