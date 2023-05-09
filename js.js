const resetBtn = document.querySelector(".reset");
const colorBtn = document.querySelector(".color");
const monocromaticBtn = document.querySelector(".monochromatic");
const submitBtn = document.querySelector(".submit");

const gridB = document.querySelector("#gridBox");

function createElement(n = 16) {
  for (let i = 0; i < n * n; i++) {
    let box = document.createElement("div");
    box.id = "box";
    box.classList = "boxes";
    gridBox.appendChild(box);
  }
}
createElement(8);
