const board = [["X", ".", ".", "X"], [".", ".", ".", "X"], [".", ".", ".", "X"]]


/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board: string[][]) {
    const rows = board.length
    const columns = board[0].length
    let result = 0

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const element = board[i][j]
            if (element === '.') continue
            result++
            if (board[i]?.[j + 1] === 'X') {
                let count = 1
                while (board[i]?.[j + count] !== undefined && board[i]?.[j + count] === 'X') {
                    board[i][j + count] = '.'
                    count++
                }
            }



            else if (board[i + 1]?.[j] === 'X') {
                let count = 1
                while (board[i + count]?.[j] !== undefined && board[i + count]?.[j] === 'X') {
                    board[i + count][j] = '.'
                    count++
                }
            }


        }
    }
    return result

};


console.log(countBattleships(board))