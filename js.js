const resetBtn = document.querySelector(".reset");
const colorBtn = document.querySelector(".color");
const monochromaticBtn = document.querySelector(".monochromatic");
const submitBtn = document.querySelector(".submit");
const gridB = document.querySelector("#grid-box");

function makeGrid(n = 16) {
  // created div for the element:
  const gridDiv = document.createElement("div");
  gridDiv.classList.add("make-div");
  gridB.appendChild(gridDiv);
  let cell = document.createElement("div");
  cell.classList.add("cell");
  gridDiv.appendChild(cell);
}
