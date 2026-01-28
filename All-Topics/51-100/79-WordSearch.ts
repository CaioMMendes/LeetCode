const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word = "ABCCED"

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board: string[][], word: string) {
  let result = false

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        const visited = new Set()
        checkWord(i, j, word[0], visited)
      }

      if (result) return true
    }
  }

  return result

  function checkWord(
    i: number,
    j: number,
    currentWord: string,
    visited: Set<unknown>,
  ) {
    if (!board?.[i]?.[j]) return
    const key = `${i}-${j}`
    if (visited.has(key)) return
    visited.add(key)

    if (currentWord === word) return (result = true)
    if (currentWord.length > word.length) return false

    const targetWord = word[currentWord.length]

    if (board?.[i + 1]?.[j] === targetWord)
      checkWord(i + 1, j, currentWord + targetWord, visited)
    if (board?.[i - 1]?.[j] === targetWord)
      checkWord(i - 1, j, currentWord + targetWord, visited)
    if (board?.[i]?.[j + 1] === targetWord)
      checkWord(i, j + 1, currentWord + targetWord, visited)
    if (board?.[i]?.[j - 1] === targetWord)
      checkWord(i, j - 1, currentWord + targetWord, visited)

    visited.delete(key)
    return false
  }
}

console.log(exist(board, word))
