const salary = [4000, 3000, 1000, 2000]

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary: number[]) {
  const min = Math.min(...salary)
  const max = Math.max(...salary)

  const sum = salary.reduce((acc, cur) => acc + cur, 0)

  return (sum - max - min) / (salary.length - 2)
}

console.log(average(salary))
