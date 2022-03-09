const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const colorGenerator = () => {
  return `rgb(
    ${random(0, 255)},
    ${random(0, 255)},
    ${random(0, 255)}
  )`;
};


