import * as draw from "./drawProcess.js";

const summation = (processQueue, getBy) => {
  let counter = 0;
  processQueue.forEach((index) => {
    counter += parseInt(index[getBy]);
  });
  return counter;
};

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

      queue.forEach((item, index) => {
        draw.drawProcess(
          board,
          [
            counter,
            index,
            parseInt(item["weight"]),
          ],
          [10, 10]
        );
        counter += parseInt(item["weight"]);
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
