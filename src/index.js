module.exports = function solveSudoku(matrix) {
  const arr = new Array(matrix[0].length).fill(0);
  do {
  Ok = true;
  matrix.forEach(row => Row(row));
  arr.forEach((_, index) => SolveColumn(matrix, index));
  } while (Ok === false);
  //log(matrix);
  // Видимо этy задачу лучше решать через рекурсию, вместо циклов... 
  return matrix;
}

const log = (str) => console.log(str);
// log('start');
let Ok = true;
function Sudoku(matrix) {
  const arr = new Array(matrix[0].length).fill(0);
 // do {
  Ok = true;
  matrix.forEach(row => Row(row));
  arr.forEach((_, index) => SolveColumn(matrix, index));
  //} while (Ok === false);
  log(matrix);
  return matrix;
}
function SolveColumn(matrix, indexColumn) {
  const row = Row(matrix.map(item => item[indexColumn]));
  if (row === undefined) return;
  matrix.forEach((item, index) => item[indexColumn] = row[index]);
}
function Row(row) {
  // log(row);
  let count = 0;
  // 1шаг. Посчитать количество 0-элементов
  row.forEach(number => { if (number === 0) { count++; Ok = false; } });
  // log(count);
  if (count !== 1) return undefined;
  log('2step: ' + row);
  // 2шаг. Начинаем решать, только для тех случаев, где не хватает только одного эллемента
  for (let index = 1; index < row.length; index++) {
    if (row.findIndex(number => number === index) === -1) {
      row[row.findIndex(number => number === 0)] = index;
      log(row);
      return row;
    }
  }
  return undefined;
}


const initial1 = [
  [5, 3, 4, 6, 7, 8, 9, 0, 0],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const initial = [
  [6, 5, 0, 7, 3, 0, 0, 8, 0],
  [0, 0, 0, 4, 8, 0, 5, 3, 0],
  [8, 4, 0, 9, 2, 5, 0, 0, 0],
  [0, 9, 0, 8, 0, 0, 0, 0, 0],
  [5, 3, 0, 2, 0, 9, 6, 0, 0],
  [0, 0, 6, 0, 0, 0, 8, 0, 0],
  [0, 0, 9, 0, 0, 0, 0, 0, 6],
  [0, 0, 7, 0, 0, 0, 0, 5, 0],
  [1, 6, 5, 3, 9, 0, 4, 7, 0]
];

Sudoku(initial1);