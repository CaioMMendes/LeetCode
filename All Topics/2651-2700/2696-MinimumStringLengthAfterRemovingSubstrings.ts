const s = "ABFCACDB"

/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s: string) {
  let newS = s
  while (true) {
    const initialLength = newS.length
    newS = newS.replace(/AB/g, "")
    newS = newS.replace(/CD/g, "")
    if (initialLength === newS.length) break
  }
  return newS.length
}

console.log(minLength(s))
