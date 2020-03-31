module.exports = function solveSudoku(matrix) {

  const isCorrect = (row, column, value) => {
    for (let i = 0; i < 9; i++) {
      if (matrix[row][i] === value || matrix[i][column] === value || matrix[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(column / 3) + i % 3] === value) return false;
    }
    return true;
  }

  const Solve = () => {
    for (let iRow = 0; iRow < 9; iRow++) {
      for (let iColumn = 0; iColumn < 9; iColumn++) {
        if (matrix[iRow][iColumn] === 0) {
          for (let value = 1; value < 10; value++) {
            if (isCorrect(iRow, iColumn, value)) {
              matrix[iRow][iColumn] = value;
              if (Solve()) return true;
              else matrix[iRow][iColumn] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  if (Solve()) return matrix;
  return false;
}

