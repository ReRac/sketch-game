const resetBtn = document.querySelector(".reset");
const colorBtn = document.querySelector(".color");
const monochromaticBtn = document.querySelector(".monochromatic");
const submitBtn = document.querySelector(".submit");
const container = document.querySelector("#container");
const gridContainer = document.querySelector(".grid");

let size = 4;

const createGrid = (number) => {
  for (let i = 0; i < number; i++) {
    let rows = document.createElement("div");
    rows.classList.add("rows");

    for (let j = 0; j < number; j++) {
      let gridBox = document.createElement("div");
      gridBox.classList.add("grid-box");
      rows.appendChild(gridBox);
    }
    gridContainer.appendChild(rows);
  }
};
createGrid(size);
