const time = "2?:?0"

/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time: string) {
  let newTime = time.split("")

  if (newTime[0] === "?") {
    if (newTime[1] === "?" || Number(newTime[1]) <= 3) {
      newTime[0] = "2"
    } else {
      newTime[0] = "1"
    }
  }

  if (newTime[1] === "?") {
    if (newTime[0] === "1" || newTime[0] === "0") {
      newTime[1] = "9"
    } else {
      newTime[1] = "3"
    }
  }

  if (newTime[3] === "?") {
    newTime[3] = "5"
  }

  if (newTime[4] === "?") {
    newTime[4] = "9"
  }

  return newTime.join("")
}

console.log(maximumTime(time))
