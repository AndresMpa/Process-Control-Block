let queue = JSON.parse(localStorage.getItem("task"));

export const simulate = (value) => {
  switch (value) {
    case "fifo":
      queue.forEach((item) => {
        console.log(item["weight"], item["start"]);
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
      Swal.fire(
        "Oops...",
        "Something went wrong, try again",
        "error"
      );
      break;
  }
};
