const path = "NES"

/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path: string) {
  const obj: Record<string, boolean> = { "0,0": true }
  const location = [0, 0]

  for (const value of path) {
    if (value === "N") {
      location[1]++
      if (obj[String(location)]) {
        return true
      } else {
        obj[String(location)] = true
      }
      continue
    }
    if (value === "S") {
      location[1]--
      if (obj[String(location)]) {
        return true
      } else {
        obj[String(location)] = true
      }
      continue
    }

    if (value === "E") {
      location[0]++
      if (obj[String(location)]) {
        return true
      } else {
        obj[String(location)] = true
      }
      continue
    }

    if (value === "W") {
      location[0]--
      if (obj[String(location)]) {
        return true
      } else {
        obj[String(location)] = true
      }
      continue
    }
  }

  return false
}

console.log(isPathCrossing(path))
