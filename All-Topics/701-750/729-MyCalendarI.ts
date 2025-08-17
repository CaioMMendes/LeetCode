//@ts-nocheck

// ["MyCalendar", "book", "book", "book"]
// [[], [10, 20], [15, 25], [20, 30]]

var MyCalendar = function () {
  this.reserved = []
}

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  for (let i = 0; i < this.reserved.length; i++) {
    if (start < this.reserved[i][1] && this.reserved[i][0] < end) return false
  }
  this.reserved.push([start, end])
  return true
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
