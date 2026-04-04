const boxes = "110"

/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes: string) {
  const result = []

  for (let i = 0; i < boxes.length; i++) {
    let sum = 0

    for (let j = 0; j < boxes.length; j++) {
      if (i === j || boxes[j] === "0") continue

      const dif = Math.abs(i - j)
      sum += dif
    }

    result.push(sum)
  }

  return result
}

console.log(minOperations(boxes))
