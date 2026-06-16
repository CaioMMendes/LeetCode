const path = "/home/"

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path: string) {
  const splitedPath = path.split(/\//g)
  let result: string[] | string = []

  for (const val of splitedPath) {
    if (val === "" || val === ".") continue

    if (val === "..") {
      result.pop()
      continue
    }
    result.push(val)
  }

  result = result.join("/")

  return `/${result}`
}

console.log(simplifyPath(path))
