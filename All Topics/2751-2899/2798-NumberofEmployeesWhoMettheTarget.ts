const hours = [0, 1, 2, 3, 4],
  target = 2

/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours: number[], target: number) {
  return hours.reduce((acc, curr) => acc + (curr >= target ? 1 : 0), 0)
}

console.log(numberOfEmployeesWhoMetTarget(hours, target))
