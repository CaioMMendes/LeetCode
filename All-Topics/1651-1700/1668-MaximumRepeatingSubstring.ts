const sequence = "ababc",
  word = "ab"

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence: string, word: string) {
  let string = ""
  let result = 0
  let count = 1
  while (string.length < sequence.length) {
    string = word.repeat(count)
    const regex = new RegExp(string, "g")
    const match = sequence.match(regex)
    if (match) {
      result = count
    }
    count++
  }

  return result
}

//Outra forma que eu poderia ter feito

// let count = 0;
// let repeated = word;
// while (sequence.indexOf(repeated) !== -1) {
//     count++;
//     repeated += word;
// }
// return count;

console.log(maxRepeating(sequence, word))
