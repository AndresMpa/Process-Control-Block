export const validateForm = () => {
  const fields = document.querySelectorAll("input");
  let task = {};

  fields.forEach((item) => {
    if (item.value) {
      task[item.id] = item.value;
    }
  });

  let queue = JSON.parse(localStorage.getItem("task")) || [];
  queue.push(task);

  localStorage.setItem("task", JSON.stringify(queue));

  return task;
};

export const createTask = (container, data) => {
  let process = document.createElement("article");
  process.classList.add("task");
  process.innerHTML = `
    <h2>Process ${data["name"]}</h2>
    <div>
      <p><span>CPU burst: </span> ${data["weight"]}</p>
      <p><span>Time start: </span> ${data["start"]}</p>
      ${
        data["priority"]
          ? `<p><span>Priority: </span> ${data["priority"]}</p>`
          : ``
      }
      ${
        data["fraction"]
          ? `<p><span>Fraction: </span> ${data["fraction"]}</p>`
          : ``
      }

    </div>
  `;
  container.appendChild(process);
};
