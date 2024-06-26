const command = "G()()()()(al)"

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  return command.replace(/\(\)/g, "o").replace(/\(|\)/g, "")
}

console.log(interpret(command))
