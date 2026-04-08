const rooms = [[1, 3], [3, 0, 1], [2], [0]]

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms: number[][]) {
  const roomsToVisit = new Set<number>()
  const keys = new Set([0])

  for (let i = 0; i < rooms.length; i++) {
    roomsToVisit.add(i)
  }

  while (true) {
    const needVisit = roomsToVisit.size

    for (const val of roomsToVisit) {
      if (keys.has(val)) {
        roomsToVisit.delete(val)
        for (const key of rooms[val]) {
          keys.add(key)
        }
      }
    }
    if (roomsToVisit.size === 0) return true

    if (needVisit === roomsToVisit.size) return false
  }

  return true
}

console.log(canVisitAllRooms(rooms))
