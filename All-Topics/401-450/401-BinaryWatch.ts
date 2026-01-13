const turnedOn = 3

/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn: number) {
  const hours = [1, 2, 4, 8]
  const minutes = [1, 2, 4, 8, 16, 32]

  const maxHours = 11
  const maxMin = 59
  const result = new Set()

  generateBinary("", 0)

  function generateBinary(binary: string, size: number) {
    if (size > 10) return

    checkValid(binary)

    generateBinary(binary + "0", size + 1)
    generateBinary(binary + "1", size + 1)
  }

  return [...result]

  function checkValid(str: string) {
    if (!str) return false
    let turned = 0
    let curHour = 0
    let curMin = 0

    for (let i = 0; i < str.length; i++) {
      if (str[i] === "1") {
        turned++

        if (i < 4) {
          curHour += hours[i]
        } else {
          curMin += minutes[i - 4]
        }
      }
    }

    if (turned !== turnedOn || curMin > 59 || curHour > 11) return false

    result.add(formatTime(curHour, curMin))
  }

  function formatTime(hours: number, minutes: number) {
    if (minutes < 10) return `${hours}:0${minutes}`

    return `${hours}:${minutes}`
  }
}

console.log(readBinaryWatch(turnedOn))
