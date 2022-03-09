export const drawBoard = (queue) => {
  let board = document.createElement("canvas");
  board.classList = "board";
  board.style.height = `${queue.length * 100}px`;
  setTimeout(() => {
    document.querySelector("body").appendChild(board);
  }, 500);

  return board;
};

export const drawProcess = (canvas, color, process, size) => {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = `${color}`;
  let box = [size[0] * process[0], size[1] * process[1], 10 * process[2], 10];
  ctx.fillRect(...box);
  //console.log(...box);
};
