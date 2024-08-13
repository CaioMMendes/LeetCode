const ops = ["5", "2", "C", "D", "+"]

/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations: string[]) {
  const record: number[] = []

  return operations.reduce((acc, cur, index) => {
    const recordLength = record.length

    if (cur === "+") {
      const sum =
        (record[recordLength - 1] ? record[recordLength - 1] : 0) +
        (record[recordLength - 2] ? record[recordLength - 2] : 0)
      acc = acc + sum
      record.push(sum)
    } else if (cur === "C") {
      acc = acc - record[recordLength - 1]
      record.pop()
    } else if (cur === "D") {
      const multiply = record[recordLength - 1]
        ? record[recordLength - 1] * 2
        : 0
      acc = acc + multiply
      record.push(multiply)
    } else {
      const number = Number(cur)
      acc = acc + number
      record.push(number)
    }

    return acc
  }, 0)
}

console.log(calPoints(ops))
