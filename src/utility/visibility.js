const fields = document.querySelectorAll("input");

export const hiddeOption = (value) => {
  switch (value) {
    case "fifo":
      fields[0].parentNode.style.display = "flex";
      fields[3].parentNode.style.display = "none";
      fields[2].parentNode.style.display = "flex";
      fields[3].parentNode.style.display = "none";
      fields[4].parentNode.style.display = "none";
      break;
    case "sjf":
      fields[0].parentNode.style.display = "flex";
      fields[1].parentNode.style.display = "flex";
      fields[2].parentNode.style.display = "flex";
      fields[3].parentNode.style.display = "none";
      fields[4].parentNode.style.display = "none";
      break;
    case "priority":
      fields[0].parentNode.style.display = "flex";
      fields[1].parentNode.style.display = "flex";
      fields[2].parentNode.style.display = "flex";
      fields[3].parentNode.style.display = "flex";
      fields[4].parentNode.style.display = "none";
      break;
    case "roundRobin":
      fields[0].parentNode.style.display = "flex";
      fields[1].parentNode.style.display = "flex";
      fields[2].parentNode.style.display = "flex";
      fields[3].parentNode.style.display = "none";
      fields[4].parentNode.style.display = "flex";
      break;
  }
};

export const handleComponentVisibility = (component, analize = true) => {
  if (component.style.display === "none" && analize) {
    component.classList = "animate__animated animate__backInLeft";
    setTimeout(() => {
      component.style.display = "inline-flex";
    }, 500);
  } else {
    component.classList = "animate__animated animate__backOutLeft";
    setTimeout(() => {
      component.style.display = "none";
    }, 500);
  }
};

export const clearQueue = () => {
  document.querySelector("#app").innerHTML = ``;
  localStorage.clear();
};
