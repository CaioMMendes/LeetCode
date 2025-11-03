const colors = "abaac",
  neededTime = [1, 2, 3, 4, 5]

/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors: string, neededTime: number[]) {
  const times = []

  let temp: number[] = []
  for (let i = 1; i < neededTime.length; i++) {
    if (colors[i] === colors[i - 1]) {
      if (temp.length === 0) {
        temp = [neededTime[i], neededTime[i - 1]]
      } else {
        temp.push(neededTime[i])
      }
      if (i === neededTime.length - 1) times.push(temp)
    } else if (temp.length > 0) {
      times.push(temp)
      temp = []
    }
  }
  return times.reduce((acc, cur) => {
    return acc + (cur.reduce((acc, cur) => acc + cur, 0) - Math.max(...cur))
  }, 0)
}

console.log(minCost(colors, neededTime))
