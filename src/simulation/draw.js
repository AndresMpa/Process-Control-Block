export const drawBoard = () => {
  let board = document.createElement("canvas");
  board.classList = "board";
  setTimeout(() => {
    document.querySelector("body").appendChild(board);
  }, 500);

  return board;
};

export const drawProcess = (canvas, color, process, size) => {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = `${color}`;
  let box = [size[0] * process[0], size[1] * process[1], size[0] * process[2], size[1]];
  ctx.fillRect(...box);
};
