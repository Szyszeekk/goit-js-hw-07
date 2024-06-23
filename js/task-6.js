function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("div#boxes");

const dataCreate = document.querySelector("button[data-create]");

const dataDestroy = document.querySelector("button[data-destroy]");

const destroyBoxes = () => {
  [...boxes.children].forEach((child) => child.remove());
};

const createBoxes = (amount) => {
  destroyBoxes();
  const baseSize = 30;
  const sizeRatio = 10;

  const newBoxes = Array.from({ length: amount }, (_, i) => {
    const size = `${baseSize + (i + boxes.children.length) * sizeRatio}px`;
    const box = document.createElement("div");
    box.style.width = size;
    box.style.height = size;
    box.style.backgroundColor = getRandomHexColor();
    return box;
  });

  const fragment = document.createDocumentFragment();
  fragment.append(...newBoxes);
  boxes.prepend(fragment);
};

dataCreate.addEventListener("click", () => {
  const input = document.querySelector("input");
  const amount = parseInt(input.valueAsNumber);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Amount must be between 1 and 100.");
  }
  input.value = "";
});

dataDestroy.addEventListener("click", () => {
  destroyBoxes();
});
