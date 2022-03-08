import { createTask, validateForm } from "./simulation/createTask.js";
import { simulate } from "./simulation/makeSimulation.js";
import * as util from "./utility/visibility.js";

const algorithm = document.querySelector("#algorithm");
const start = document.querySelector("#start");
const name = document.querySelector("#name");
const logo = document.querySelector("#logo");
const data = document.querySelector("#data");
const app = document.querySelector("#app");

window.onload = () => util.hiddeOption(algorithm.value);
window.onbeforeunload = () => localStorage.clear();

start.addEventListener("change", (event) => {
  if (!localStorage.getItem("task")) {
    Swal.fire(
      "Input error",
      "First process can not be higher than zero",
      "warning"
    );
    event.target.value = 0;
  }
});

algorithm.addEventListener("change", (event) =>
  util.hiddeOption(event.target.value)
);

logo.addEventListener("click", () => util.handleComponentVisibility(data));

data.addEventListener("submit", (event) => event.preventDefault());

document.querySelector("#addProcess").addEventListener("click", () => {
  if (localStorage.getItem("task") && parseInt(start.value) === 0) {
    Swal.fire(
      "Notice...",
      "In this implementation there must be only on init process",
      "info"
    );
    start.value = 1;
  } else {
    let newTask = validateForm();
    createTask(app, newTask);
  }
  name.value = parseInt(name.value) + 1;
});

document.querySelector("#simulation").addEventListener("click", () => {
  if (
    localStorage.getItem("task") &&
    JSON.parse(localStorage.getItem("task")).length > 1
  ) {
    util.handleComponentVisibility(data, false);
    simulate(algorithm.value);
  } else {
    Swal.fire(
      "Oops...",
      "There're no enough process, fill some process first",
      "error"
    );
  }
});

document.querySelector("#clearProcess").addEventListener("click", () => {
  util.clearQueue();
});
