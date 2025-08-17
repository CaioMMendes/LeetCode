const a = "aba",
  b = "cdc"

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a: string, b: string) {
  let long = -1
  if (b.length > a.length) {
    const c = a
    a = b
    b = c
  }
  for (let i = 0; i < a.length; i++) {
    let sub = ""

    for (let j = i; j < a.length; j++) {
      sub += a[j]

      if (sub.length > long && !b.includes(sub)) {
        long = sub.length
      }
    }
  }
  return long
}

console.log(findLUSlength(a, b))

/*

Nesse exercício era só ver qual string é maior


var findLUSlength = function(a, b) {
    if(a === b) return -1;
    return Math.max(a.length, b.length)
};


*/
