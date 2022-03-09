const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const colorGenerator = () => {
  return `rgb(
    ${random(0, 255)},
    ${random(0, 255)},
    ${random(0, 255)}
  )`;
};

export const drawBoard = (queue) => {
  let board = document.createElement("canvas");
  board.classList = "board";
  board.style.height = `${queue.length * 100}px`;
  setTimeout(() => {
    document.querySelector("body").appendChild(board);
  }, 500);

  return board;
};

export const drawProcess = (canvas, process, size) => {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = `${colorGenerator()}`;
  let box = [size[0] * process[0], size[1] * process[1], 10 * process[2], 10];
  ctx.fillRect(...box);
  console.log(...box);
};
