import * as draw from "./drawProcess.js";

const sortProcess = (processQueue, sortBy) => {
  return processQueue.sort((previous, index) => {
    if (previous[sortBy] > index[sortBy]) {
      return 1;
    } else if (previous[sortBy] > index[sortBy]) {
      return -1;
    } else {
      return 0;
    }
  });
};

export const simulate = (value) => {
  let queue = JSON.parse(localStorage.getItem("task"));

  switch (value) {
    case "fifo":
      queue = sortProcess(queue, "start");

      let board = draw.drawBoard(queue);

     /* let sizeFactor = [*/
        /*(window.innerWidth * 0.5) / summation(queue, "weight") * 2,*/
        /*(parseInt(board.style.height, 10) * 0.5) / summation(queue, "weight") * 2,*/
      /*];*/
      let counter = 0;

      queue.forEach((process, index) => {
        draw.drawProcess(
          board,
          process["color"],
          [
            counter,
            index,
            parseInt(process["weight"]),
          ],
          [10, 10]
        );
        counter += parseInt(process["weight"]);
      });

      break;
    case "sjf":
      queue.forEach((item) => {
        console.log(item);
      });
      break;
    case "priority":
      queue.forEach((item) => {
        console.log(item);
      });
      break;
    case "roundRobin":
      break;

    default:
      Swal.fire("Oops...", "Something went wrong, try again", "error");
      break;
  }
};
