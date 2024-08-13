const image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
]

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image: number[][]) {
  return image.map((array) => array.reverse().map((num) => (num === 1 ? 0 : 1)))
}

console.log(flipAndInvertImage(image))
