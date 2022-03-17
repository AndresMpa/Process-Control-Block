const TEperformance = (table, taskQueue) => {
  table.insertAdjacentHTML(
    "beforeend",
    `<thead>
      <th>P</th>
      <th>(ts)</th>
      <th>(t)</th>
      <th>(TE)</th>
    </thead>`
  );

  let averange = 0;
  let counter = 0;
  taskQueue.forEach((task) => {
    table.insertAdjacentHTML(
      "beforeend",
      `<tr>
        <th>${task["name"]}</th>
        <th>${counter}</th>
        <th>${parseInt(task["start"])}</th>
        <th>${counter - parseInt(task["start"])}</th>
      </tr>`
    );
    averange += counter - parseInt(task["start"]);
    counter += parseInt(task["weight"]);
  });

  return `<p>TE averange <span>${(averange / taskQueue.length).toFixed(
    2
  )}</span></p>`;
};

// It calculates stats for time waiting
const TSperformance = (table, taskQueue) => {
  table.insertAdjacentHTML(
    "beforeend",
    `<thead>
      <th>P</th>
      <th>(ts)</th>
      <th>(t)</th>
      <th>(TS)</th>
    </thead>`
  );

  let averange = 0;
  let counter = 0;
  taskQueue.forEach((task) => {
    table.insertAdjacentHTML(
      "beforeend",
      `<tr>
        <th>${task["name"]}</th>
        <th>${parseInt(task["weight"]) + counter}</th>
        <th>${parseInt(task["start"])}</th>
        <th>${parseInt(task["weight"]) + counter - parseInt(task["start"])}</th>
      </tr>`
    );
    averange += counter - parseInt(task["start"]);
    counter += parseInt(task["weight"]);
  });

  return `<p>TS averange <span>${(averange / taskQueue.length).toFixed(
    2
  )}</span></p>`;
};

export const performeStats = () => {
  const taskQueue = JSON.parse(localStorage.getItem("task"));
  let dashboard = document.createElement("article");
  let icon = document.createElement("article");
  let table = document.createElement("table");
  let averange = [];

  icon.classList = "icon";
  icon.innerHTML = "<i class='fa-regular fa-chart-line'> stast</i>";


  icon.addEventListener("click", () => {
    document.querySelector("#dashboard").style.display = "flex";
  });

  document.querySelector(".stats").appendChild(icon);

  averange.push(TEperformance(table, taskQueue));
  averange.push(TSperformance(table, taskQueue));
  dashboard.appendChild(table);

  averange.forEach((label) => {
    dashboard.insertAdjacentHTML("beforeend", label);
  });

  dashboard.id = "dashboard";

  dashboard.addEventListener("click", () => {
    document.querySelector("#dashboard").style.display = "none";
  });

  document.querySelector(".stats").appendChild(dashboard);
};
