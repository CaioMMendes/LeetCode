const intervals = [
  [1, 2],
  [2, 3],
  [3, 4],
]

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var countIntersectingIntervals = function (intervals: number[][]) {
  let result = 0

  for (let i = 0; i < intervals.length; i++) {
    for (let j = i + 1; j < intervals.length; j++) {
      const first = intervals[i]
      const second = intervals[j]
      if (Math.max(first[0], second[0]) <= Math.min(first[1], second[1]))
        result++
    }
  }

  return result
}

// A ideia central é pensar no oposto: quando dois intervalos não se intersectam?

// Dados [a, b] e [c, d], eles só não têm ponto em comum se um termina antes do outro começar:

// [a, b] termina antes de [c, d] começar → b < c
// ou [c, d] termina antes de [a, b] começar → d < a

// Negando isso, eles se intersectam quando:

// a <= d  e  c <= b

// Uma forma equivalente, e muito usada, é:

// max(a, c) <= min(b, d)

console.log(countIntersectingIntervals(intervals))
