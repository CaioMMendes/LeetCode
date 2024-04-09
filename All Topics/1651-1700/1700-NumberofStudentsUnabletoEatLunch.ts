// const students = [1, 1, 0, 0],
//   sandwiches = [0, 1, 0, 1]
const students = [1, 1, 1, 0, 0, 1],
  sandwiches = [1, 0, 0, 0, 1, 1]

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students: number[], sandwiches: number[]) {
  let stop = 0

  while (students.length > 0) {
    if (students[0] === sandwiches[0]) {
      students.shift()
      sandwiches.shift()
      stop = 0
    } else {
      students.push(students.shift()!)
      stop++
      if (stop === students.length) {
        break
      }
    }
  }
  return students.length
}

console.log(countStudents(students, sandwiches))
