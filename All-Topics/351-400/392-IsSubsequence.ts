const s = "rjufvjafbxnbgriwgokdgqdqewn",
  t =
    "mjmqqjrmzkvhxlyruonekhhofpzzslupzojfuoztvzmmqvmlhgqxehojfowtrinbatjujaxekbcydldglkbxsqbbnrkhfdnpfbuaktupfftiljwpgglkjqunvithzlzpgikixqeuimmtbiskemplcvljqgvlzvnqxgedxqnznddkiujwhdefziydtquoudzxstpjjitmiimbjfgfjikkjycwgnpdxpeppsturjwkgnifinccvqzwlbmgpdaodzptyrjjkbqmgdrftfbwgimsmjpknuqtijrsnwvtytqqvookinzmkkkrkgwafohflvuedssukjgipgmypakhlckvizmqvycvbxhlljzejcaijqnfgobuhuiahtmxfzoplmmjfxtggwwxliplntkfuxjcnzcqsaagahbbneugiocexcfpszzomumfqpaiydssmihdoewahoswhlnpctjmkyufsvjlrflfiktndubnymenlmpyrhjxfdcq"
// const s = "b"
// const t = "c"

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s: string, t: string) => {
  const indexes = {}
  let currentIndex = -1

  for (let i = 0; i < t.length; i++) {
    if (indexes[t[i]]) {
      indexes[t[i]].push(i)
    } else {
      indexes[t[i]] = [i]
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (!indexes[s[i]]) {
      return false
    }
    if (indexes[s[i]][0] === undefined) {
      return false
    }

    if (indexes[s[i]][0] < currentIndex) {
      const length = indexes[s[i]].length
      for (let j = 0; j < length; j++) {
        if (indexes[s[i]][j] < currentIndex) {
          indexes[s[i]].shift()
          j--
        } else {
          currentIndex = indexes[s[i]][0]
          break
        }

        if (indexes[s[i]].length === 0) {
          return false
        }
      }
    }
    currentIndex = indexes[s[i]][0]
    indexes[s[i]].shift()
  }
  return true
}

console.log(isSubsequence("abc", "ahbgdc"))
console.log("É pra retornar true")
console.log("--------------------------")
console.log(isSubsequence(s, t))
console.log("É pra retornar false")
console.log("--------------------------")
console.log(isSubsequence("b", "c"))
console.log("É pra retornar false")
console.log("--------------------------")
console.log(isSubsequence("ab", "baab"))
console.log("É pra retornar true")
console.log("--------------------------")

// const s = "b";
// const t = "c";

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// const isSubsequence = (s: string, t: string) => {
//   const splitedT = t.split("");
//   let indexes = {};
//   for (let index = 0; index < splitedT.length; index++) {
//     const number = splitedT[index];
//     if (Object.keys(indexes).includes(number)) {
//       indexes = { ...indexes, [number]: [...indexes[number], index] };
//     } else {
//       indexes = { ...indexes, [number]: [index] };
//     }
//   }
//   let result = true;
//   let lastIndex = -15;
//   let word = "";
//   for (let index = 0; index < s.length; index++) {
//     // const currentIndex = splitedT.indexOf(s[index]);
//     console.log("a");
//     let currentIndex = -20;
//     for (let k = 0; k < indexes[s[index]]?.length; k++) {
//       if (indexes[s[index]][k] > lastIndex) {
//         currentIndex = indexes[s[index]][k];
//         k = +Infinity;
//       }
//     }
//     console.log("c", currentIndex);
//     if (currentIndex >= lastIndex) {
//       const spliced = splitedT.splice(currentIndex, 1);
//       console.log(splitedT);
//       word += spliced;

//       lastIndex = currentIndex;
//     } else {
//       result = false;
//       break;
//     }
//   }
//   console.log(indexes);
//   return result;
// };

// console.log(isSubsequence(s, t));
