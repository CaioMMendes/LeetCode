const seats = [4, 1, 5, 9],
  students = [1, 3, 2, 6]

/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats: number[], students: number[]) {
  seats.sort((a, b) => a - b)
  students.sort((a, b) => a - b)
  return seats.reduce((acc, cur, i) => {
    return acc + Math.abs(cur - students[i])
  }, 0)
}

console.log(minMovesToSeat(seats, students))
