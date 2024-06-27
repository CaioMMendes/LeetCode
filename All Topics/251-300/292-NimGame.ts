const n = 5

/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n: number) {
  return n % 4 === 0 ? false : true
}

for (let index = 1; index <= 20; index++) {
  console.log(index, canWinNim(index))
}
