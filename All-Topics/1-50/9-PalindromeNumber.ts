const x = 121;

function isPalindrome(x: number): boolean {
  const string = String(x);
  let result = true;
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (i === 1) {
      if (string[0] === "-" || string[0] === "+") {
        return (result = false);
      }
    }
    if (string[i] !== string[string.length - i - 1]) {
      return (result = false);
    }
  }

  return result;
}

console.log(isPalindrome(x));

// function isPalindrome(x: number): boolean {

//   return x.toString() === x.toString().split("").reverse().join("")
//     ? true
//     : false;
// }
