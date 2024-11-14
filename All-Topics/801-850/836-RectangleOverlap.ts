const rec1 = [0, 0, 2, 2],
  rec2 = [1, 1, 3, 3]

/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1: number[], rec2: number[]) {
  const leftBot1 = [rec1[0], rec1[1]]
  const rightTop1 = [rec1[2], rec1[3]]

  const leftBot2 = [rec2[0], rec2[1]]
  const rightTop2 = [rec2[2], rec2[3]]

  if (
    leftBot1[0] < rightTop2[0] &&
    rightTop1[0] > leftBot2[0] &&
    leftBot1[1] < rightTop2[1] &&
    rightTop1[1] > leftBot2[1]
  )
    return true

  return false
}

console.log(isRectangleOverlap(rec1, rec2))
