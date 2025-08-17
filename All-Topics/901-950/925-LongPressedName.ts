const name = "alex",
  typed = "aaleex"

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name: string, typed: string) {
  const nameArray = []
  const typedArray = []
  if (name.length === 1) {
    nameArray.push([name, 1])
  }
  if (typed.length === 1) {
    typedArray.push([typed, 1])
  }
  let letterName = name[0]
  let countName = 1
  for (let i = 1; i < name.length; i++) {
    if (name[i] !== letterName) {
      nameArray.push([letterName, countName])
      letterName = name[i]
      countName = 1
      if (i === name.length - 1) {
        nameArray.push([letterName, countName])
      }
    } else {
      countName++
      if (i === name.length - 1) {
        nameArray.push([letterName, countName])
      }
    }
  }

  let letterTyped = typed[0]
  let countTyped = 1
  for (let i = 1; i < typed.length; i++) {
    if (typed[i] !== letterTyped) {
      typedArray.push([letterTyped, countTyped])
      letterTyped = typed[i]
      countTyped = 1
      if (i === typed.length - 1) {
        typedArray.push([letterTyped, countTyped])
      }
    } else {
      countTyped++
      if (i === typed.length - 1) {
        typedArray.push([letterTyped, countTyped])
      }
    }
  }

  if (nameArray.length !== typedArray.length) return false

  for (let i = 0; i < nameArray.length; i++) {
    if (nameArray[i][0] !== typedArray[i][0]) return false
    if (nameArray[i][1] > typedArray[i][1]) return false
  }

  return true
}

console.log(isLongPressedName(name, typed))
