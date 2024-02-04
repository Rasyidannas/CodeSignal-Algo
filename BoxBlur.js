// this will get 3 x 3 in the image array and sum it
function boxBlur(image) {
  //this for outer wrapper
  let bluredImage = Array.from(
    new Array(image.length - 2),
    () => new Array(image[0].length - 2),
  );

  for (let i = 1; i < image.length - 1; i++) {
    for (let j = 1; j < image[i].length - 1; j++) {
      bluredImage[i - 1][j - 1] = Math.floor(
        (image[i - 1][j - 1] +
          image[i - 1][j] +
          image[i - 1][j + 1] +
          image[i][j - 1] +
          image[i][j] +
          image[i][j + 1] +
          image[i + 1][j - 1] +
          image[i + 1][j] +
          image[i + 1][j + 1]) /
          9,
      );
    }
  }

  return bluredImage;
}

console.log(
  boxBlur([
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1],
  ]),
); //output [[1]]

console.log(
  boxBlur([
    [7, 4, 0, 1],
    [5, 6, 2, 2],
    [6, 10, 7, 8],
    [1, 4, 2, 0],
  ]),
); //output [[5, 4], [4, 4]]

console.log(
  boxBlur([
    [7, 4, 0, 1, 2],
    [5, 6, 2, 2, 3],
    [6, 10, 7, 8, 6],
    [1, 4, 2, 0, 7],
  ]),
); //output [[5, 4, 3], [4, 4, 4]]
