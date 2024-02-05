function minesweeper(matrix) {
  let height = matrix.length;
  let width = matrix[0].length;

  //this is for outer wrapper array
  let outArray = Array.from(Array(height), () => new Array(width));

  let mines = 0;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      mines = 0;
      if (i > 0) {
        if (matrix[i - 1][j - 1]) mines += 1;
        if (matrix[i - 1][j]) mines += 1;
        if (matrix[i - 1][j + 1]) mines += 1;
      }

      if (i < height - 1) {
        if (matrix[i + 1][j - 1]) mines += 1;
        if (matrix[i + 1][j]) mines += 1;
        if (matrix[i + 1][j + 1]) mines += 1;
      }

      if (matrix[i][j - 1]) mines += 1;
      //if(matrix[i][j]) mines += 1; // As it seems you can't count the middle square! welp... I didn't know that!
      if (matrix[i][j + 1]) mines += 1;

      outArray[i][j] = mines;
    }
  }

  return outArray;
}

console.log(
  minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ]),
);

console.log(
  minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, true],
  ]),
);
