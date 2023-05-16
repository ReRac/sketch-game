const resetBtn = document.querySelector(".reset");
const colorBtn = document.querySelector(".color");
const monochromaticBtn = document.querySelector(".monochromatic");
const submitBtn = document.querySelector(".submit");
const container = document.querySelector("#container");
const gridContainer = document.querySelector(".grid");
const rangeInput = document.querySelector(".range-size");

// Create gird, loop creates row and loops same time creating additional rows
const createGrid = (number) => {
  const alphabet = "FOOD";
  for (let i = 0; i < number; i++) {
    let rows = document.createElement("div");
    rows.classList.add("rows");

    for (let j = 0; j < number; j++) {
      let gridBox = document.createElement("div");
      gridBox.classList.add("grid-box");
      rows.appendChild(gridBox);
      if (number === 15) {
        let randomLetter =
          alphabet[Math.floor(Math.random() * alphabet.length)];
        gridBox.textContent = randomLetter;
      }
    }
    gridContainer.appendChild(rows);
  }
};

//Slider function witch removes old data when using it
rangeInput.addEventListener("input", function () {
  const rangeValue = rangeInput.value;
  //remove created grid before new one
  gridContainer.innerHTML = "";
  createGrid(parseInt(rangeValue));
});

createGrid(15);
