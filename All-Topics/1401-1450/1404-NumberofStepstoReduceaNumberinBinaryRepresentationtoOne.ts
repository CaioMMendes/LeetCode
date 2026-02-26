const s = "1101"

/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s: string) {
  let steps = 0
  let carry = 0

  for (let i = s.length - 1; i > 0; i--) {
    const bit = Number(s[i]) + carry

    if (bit % 2 === 0) {
      // é par → só divide
      steps += 1
    } else {
      // é ímpar → soma 1 e divide
      steps += 2
      carry = 1
    }
  }

  return steps + carry
}

console.log(numSteps(s))

//Eu pensei certo, mas não entendi muito bem essa parte do carry

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var numSteps = function (s) {
//   let result = 0

//   for (let i = s.length - 1; i >= 0; i--) {
//     if (i === 0) {
//       if (s[i] === "1") break
//       if (s[i] === "0") result++

//       continue
//     }

//     if (s[i] === "1") {
//       result += 2
//     } else {
//       result++
//     }
//   }

//   return result
// }
