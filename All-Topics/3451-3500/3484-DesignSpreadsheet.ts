//@ts-nocheck

/**
 * @param {number} rows
 */
var Spreadsheet = function (rows) {
  this.cells = new Map()
}

/**
 * @param {string} cell
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function (cell, value) {
  this.cells.set(cell, value)
}

/**
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function (cell) {
  this.cells.delete(cell)
}

/**
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function (formula) {
  const split = formula.split("+")
  let first =
    this.cells.get(split[0].replace("=", "")) ?? split[0].replace("=", "")
  if (isNaN(Number(first))) {
    first = 0
  }

  let second = Number(split[1])

  if (isNaN(Number(split[1]))) {
    second = this.cells.get(split[1]) ?? 0
  }

  return Number(first) + Number(second)
}

/**
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */
