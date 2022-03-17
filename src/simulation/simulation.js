import { performeStats } from "./stats.js";
import * as draw from "./draw.js";

const summation = (queue) => {
  let counter = 0;
  queue.forEach((task) => {
    counter += task["weight"];
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

const processCutter = (processQueue) => {
  let newTask = {};
  let remanin = 0;
  processQueue.forEach((task) => {
    if (task["weight"] > task["fraction"]) {
      remanin = task["weight"] - task["fraction"];

      task["weight"] = task["weight"] - remanin;

      newTask = { ...task };
      newTask["weight"] = remanin;

      processQueue.push(newTask);
    }
  });
};

export const simulate = (value) => {
  const body = document.querySelector("body");
  let queue = JSON.parse(localStorage.getItem("task"));
  let board = draw.drawBoard();

  let sizeFactor = [
    (body.offsetWidth * 0.98) / (summation(queue) * 4.5),
    (body.offsetHeight * 0.8) / (queue.length * 4.5),
  ];

  let counter = 0;

  switch (value) {
    case "fifo":
      queue = sortProcess(queue, "start");
      break;

    case "sjf":
      queue = sortProcess(queue, "weight");
      queue = sortProcess(queue, "start");
      break;

    case "priority":
      queue = sortProcess(queue, "priority");
      queue = sortProcess(queue, "start");
      break;

    case "roundRobin":
      queue = sortProcess(queue, "start");
      processCutter(queue);
      break;

    default:
      try {
        Swal.fire("Oops...", "Something went wrong, try again", "error");
      } catch (error) {
        console.log(error.message);
      }
      break;
  }

  queue.forEach((process, index) => {
    draw.drawProcess(
      board,
      process["color"],
      [counter, index, process["weight"]],
      sizeFactor
    );
    counter += process["weight"];
  });

  performeStats();
};
