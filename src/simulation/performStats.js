const stats = document.querySelector("#stats");

const performeStats = () => {
  let process = document.createElement("article");
  process.classList.add("dashboard");
  process.innerHTML = `
    <h2>Simulation performance</h2>
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
