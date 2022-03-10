import { performeStats } from "./stats.js";
import * as draw from "./draw.js";

const sortProcess = (processQueue, sortBy) => {
  console.log(processQueue);
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
  let board = draw.drawBoard();
  let counter = 0;

  let sizeFactor = [10, 10];
  /*[
  (window.innerWidth * 0.5) / summation(queue, "weight") * 2,
  (parseInt(board.style.height, 10) * 0.5) / summation(queue, "weight") * 2,
  ];*/

  switch (value) {
    case "fifo":
      queue = sortProcess(queue, "start");

      queue.forEach((process, index) => {
        draw.drawProcess(
          board,
          process["color"],
          [counter, index, parseInt(process["weight"])],
          sizeFactor
        );
        counter += parseInt(process["weight"]);
      });

      performeStats();

      break;
    case "sjf":
      queue = sortProcess(queue, "weight");
      queue = sortProcess(queue, "start");

      queue.forEach((process, index) => {
        draw.drawProcess(
          board,
          process["color"],
          [counter, index, parseInt(process["weight"])],
          sizeFactor
        );
        counter += parseInt(process["weight"]);
      });

      performeStats();

      break;
    case "priority":
      queue = sortProcess(queue, "priority");
      queue = sortProcess(queue, "start");

      queue.forEach((process, index) => {
        draw.drawProcess(
          board,
          process["color"],
          [counter, index, parseInt(process["weight"])],
          sizeFactor
        );
        counter += parseInt(process["weight"]);
      });

      performeStats();
      break;
    case "roundRobin":
      Swal.fire(
        "Still working on it",
        "I'm not getting pay for this, gime me more time",
        "info"
      );
      break;

    default:
      Swal.fire("Oops...", "Something went wrong, try again", "error");
      break;
  }
};
