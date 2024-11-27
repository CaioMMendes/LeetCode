const time = "?5:00"

/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time: string) {
  let result = 1

  if (time[4] === "?") {
    result = (result === 0 ? 1 : result) * 10
  }
  if (time[3] === "?") {
    result = (result === 0 ? 1 : result) * 6
  }
  if (time[0] === "?" && time[1] === "?") {
    result = (result === 0 ? 1 : result) * 24
  } else {
    if (time[0] === "?") {
      if (time[1] === "?" || Number(time[1]) < 4) {
        result = (result === 0 ? 1 : result) * 3
      } else {
        result = (result === 0 ? 1 : result) * 2
      }
    }
    if (time[1] === "?") {
      if (time[0] === "?" || Number(time[0]) < 2) {
        result = (result === 0 ? 1 : result) * 10
      } else if (time[0] === "2") {
        result = (result === 0 ? 1 : result) * 4
      }
    }
  }

  return result
}

console.log(countTime(time))
