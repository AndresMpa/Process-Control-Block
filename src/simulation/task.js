import { colorGenerator } from "./util.js";

export const validateForm = () => {
  const fields = document.querySelectorAll("input");
  let task = {};

  fields.forEach((field, index) => {
    if (field.value) {
      index > 0
        ? (task[field.id] = parseInt(field.value))
        : (task[field.id] = field.value);
    }
  });

  task["color"] = colorGenerator();

  let queue = JSON.parse(localStorage.getItem("task")) || [];
  queue.push(task);

  localStorage.setItem("task", JSON.stringify(queue));

  return task;
};

export const createTask = (container, task) => {
  let process = document.createElement("article");
  process.classList.add("task");
  process.style.backgroundColor = `${task["color"]}`;
  process.innerHTML = `
    <h2>Process ${task["name"]}</h2>
    <div>
      <p><span>CPU burst: </span> ${task["weight"]}</p>
      <p><span>Time start: </span> ${task["start"]}</p>
      ${
        task["priority"]
          ? `<p><span>Priority: </span> ${task["priority"]}</p>`
          : ``
      }
      ${
        task["fraction"]
          ? `<p><span>Fraction: </span> ${task["fraction"]}</p>`
          : ``
      }

    </div>
  `;
  container.appendChild(process);
};
