//@ts-nocheck

const tokens = ["1", "2", "+", "3", "+", "4", "+", "5", "+"]

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens: string[]) {
  const stack: number[] = []

  for (const val of tokens) {
    if (val === "+") {
      const one = stack.pop()
      const two = stack.pop()
      stack.push(two + one)
    } else if (val === "-") {
      const one = stack.pop()
      const two = stack.pop()
      stack.push(two - one)
    } else if (val === "*") {
      const one = stack.pop()
      const two = stack.pop()
      stack.push(one * two)
    } else if (val === "/") {
      const one = stack.pop()
      const two = stack.pop()
      stack.push(Math.trunc(two / one))
    } else {
      stack.push(Number(val))
    }
  }

  return stack[0]
}

console.log(evalRPN(tokens))
