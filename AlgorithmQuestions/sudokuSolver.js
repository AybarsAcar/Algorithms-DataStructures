//this is a Sudoku Solver
//solved by using Backtracking algorithm

let board1 = [
    [7, 8, 0, 4, 0, 0, 1, 2, 0],
    [6, 0, 0, 0, 7, 5, 0, 0, 9],
    [0, 0, 0, 6, 0, 1, 0, 7, 8],
    [0, 0, 7, 0, 4, 0, 2, 6, 0],
    [0, 0, 1, 0, 5, 0, 9, 3, 0],
    [9, 0, 4, 0, 6, 0, 0, 0, 5],
    [0, 7, 0, 3, 0, 0, 0, 1, 2],
    [1, 2, 0, 0, 0, 7, 4, 0, 0],
    [0, 4, 9, 2, 0, 6, 0, 0, 7]
]

//solving function -- implementing Backtracking
function solveSudoku(board){
  let find = findEmpty();
  if (!find) return true;


}


//check if the number is valid
function valid(board, number, position){

  //check row
  for (var i = 0; i < board[0].length; i++){
    if (board[position[0]][i] === number && position[1] !== i){
      return false;
    }
  }

  //check the column
  for (var i = 0; i < board.length){
    if (board[i][position[1]] === number && position[0] !== i){
      return false;
    }
  }
}
