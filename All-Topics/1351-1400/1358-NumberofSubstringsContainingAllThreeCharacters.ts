const s = "abcabc"

var numberOfSubstrings = function (s: string) {
  const n = s.length
  const count: Record<string, number> = { a: 0, b: 0, c: 0 }
  let result = 0
  let left = 0

  for (let right = 0; right < n; right++) {
    count[s[right]]++

    while (count.a > 0 && count.b > 0 && count.c > 0) {
      result += n - right // todas as substrings de [left..right] até [left..n-1] são válidas
      count[s[left]]--
      left++
    }
  }

  return result
}

console.log(numberOfSubstrings(s))

//? essa solução dava time-limit no ultimo teste
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var numberOfSubstrings = function (s) {

//     let result = 0

//     for (let i = 0; i < s.length - 2; i++) {

//         const found = { a: 0, b: 0, c: 0 };
//         let unique = 0;

//         for (let j = i; j < s.length; j++) {
//             const char = s[j];

//             if (found[char] === 0) {
//                 unique++;
//                 if (unique === 3) {
//                     result += s.length - j;
//                     break;
//                 }
//             }
//             found[char] = 1;
//         }

//     }

//     return result

// };
