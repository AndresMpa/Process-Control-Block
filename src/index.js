import { createTask, validateForm } from "./simulation/task.js";
import { simulate } from "./simulation/simulation.js";
import * as util from "./utility/visibility.js";

const algorithm = document.querySelector("#algorithm");
const data = document.querySelector("#data form");
const start = document.querySelector("#start");
const name = document.querySelector("#name");
const logo = document.querySelector("#logo");
const app = document.querySelector("#app");

window.onload = () => util.hiddeOption(algorithm.value);
window.onbeforeunload = () => localStorage.clear();

start.addEventListener("change", (event) => {
  if (!localStorage.getItem("task")) {
    try {
      Swal.fire(
        "Input error",
        "First process can not be higher than zero",
        "warning"
      );
    } catch (error) {
      console.log(error.message);
    }
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
    try {
      Swal.fire(
        "Notice...",
        "In this implementation there must be only on init process",
        "info"
      );
    } catch (error) {
      console.log(error.message);
    }
    start.value = 1;
  } else {
    let newTask = validateForm();
    createTask(app, newTask);
    name.value = parseInt(name.value) + 1;
  }
});

document.querySelector("#simulation").addEventListener("click", () => {
  if (
    localStorage.getItem("task") &&
    JSON.parse(localStorage.getItem("task")).length > 1
  ) {
    util.handleComponentVisibility(data, false);

    document.querySelectorAll(".task").forEach((currentTask) => {
      currentTask.classList = "reduce__task";
    });

    try {
      document.querySelector(".stats article").remove();
      document.querySelector("canvas").remove();
    } catch (error) {
      console.log("Restarting simulation");
    }

    simulate(algorithm.value);
  } else {
    try {
      Swal.fire(
        "Oops...",
        "There're no enough process, fill some process first",
        "error"
      );
    } catch (error) {
      console.log(error.message);
    }
  }
});

document.querySelector("#clearProcess").addEventListener("click", () => {
  const input = document.querySelectorAll("input");

  input.forEach((item) => {
    item.value = null;
  });

  input[0].value = 1;
  input[1].value = 2;
  input[2].value = 0;

  document.querySelectorAll(".reduce__task").forEach((currentTask) => {
    currentTask.classList = "task";
  });

  try {
    document.querySelector(".stats article").innerHTML = "";
    document.querySelector("canvas").remove();
  } catch {
    console.log("There's no simulations running");
  }

  util.clearQueue();
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/serviceWorker.js").catch((error) => {
    console.error(error.message);
  });
}
