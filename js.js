const resetBtn = document.querySelector(".reset");
const colorBtn = document.querySelector(".color");
const blackAndWhiteBtn = document.querySelector(".monochromatic");
const submitBtn = document.querySelector("#submit");
const container = document.querySelector("#container");
const gridContainer = document.querySelector(".grid");
const rangeInput = document.querySelector(".range-size");
const colorPicker = document.querySelector(".color-pick");
const rows = document.querySelector(".rows");
const gridBox = document.querySelector(".grid-box");
const colorPickerInput = document.querySelector("#picker");
// Create gird, loop creates row and loops same time creating additional rows

const submitColorPink = "rgb(202, 4, 149)";

let color = "black";

const findGridSquares = () => {
  let gridBoxes = document.querySelectorAll(".grid-box");
  for (let i = 0; i < gridBoxes.length; i++) {
    gridBoxes[i].addEventListener("mouseover", () => {
      gridBoxes[i].style.backgroundColor = color;
    });
  }
};

const createGrid = (number) => {
  const alphabet = "FOOD";
  for (let i = 0; i < number; i++) {
    let rows = document.createElement("div");
    rows.classList.add("rows");

    for (let j = 0; j < number; j++) {
      let gridBox = document.createElement("div");
      gridBox.classList.add("grid-box");
      rows.appendChild(gridBox);
      if (number === 8) {
        let randomLetter =
          alphabet[Math.floor(Math.random() * alphabet.length)];
        gridBox.textContent = randomLetter;
      }
    }
    gridContainer.appendChild(rows);
  }
  findGridSquares();
};

//Slider function witch removes old data when using it
rangeInput.addEventListener("input", function () {
  const rangeValue = rangeInput.value;
  //remove created grid before new one
  gridContainer.innerHTML = "";
  createGrid(parseInt(rangeValue));
});
createGrid(15);

// resize and reset grid
resetBtn.addEventListener("click", function () {
  const rangeValue = (rangeInput.value = 15);
  gridContainer.innerHTML = "";
  createGrid(parseInt(rangeValue)); // Reset color picker value
  colorPickerInput.value = null;
});

//color picking - (_color parameter is intentionally unused or ignored)
function changeColor(_color) {
  color = _color;
}

//change black and white button and div color when clicked
function changeBtnColor() {
  blackAndWhiteBtn.classList.toggle("monochromatic");
  // Black and white button
  blackAndWhiteBtn.addEventListener("click", () => {
    color = "black";
    if (blackAndWhiteBtn.classList.contains("monochromatic")) {
      color = "white";
    } else {
      color = "black";
    }
    changeColor(color);
  });
}
// color button
colorPickerInput.oninput = (e) => {
  changeColor(e.target.value);
};
// disabled / enabled submit btn

function enableSubmitBtn() {
  submitBtn.style.opacity = "1";
  submitBtn.disabled = false;
  submitBtn.style.backgroundColor = "black";
}

function disabledSubmitBtn() {
  submitBtn.style.opacity = "0.5";
  submitBtn.disabled = true;
  submitBtn.style.backgroundColor = "black";
}
const updateSubmitState = () => {
  if (rangeInput.value === "8") {
    enableSubmitBtn();
    console.log("Button enabled");
  } else {
    disabledSubmitBtn();
  }
};

window.addEventListener("load", updateSubmitState);
rangeInput.addEventListener("input", updateSubmitState);

// task function via submit button

// cursor color pink
submitBtn.addEventListener("click", () => {
  const color = "rgb(202, 4, 149)";

  let gridBoxes = document.querySelectorAll(".grid-box");
  for (let i = 0; i < gridBoxes.length; i++) {
    gridBoxes[i].addEventListener("click", () => {
      gridBoxes[i].style.backgroundColor = color;
    });
  }
});

function checkLetters() {
  let gridBoxes = document.querySelectorAll(".grid-box");
  let markedLetters = [];

  for (let i = 0; i < gridBoxes.length; i++) {
    if (gridBoxes[i].style.backgroundColor !== "") {
      markedLetters.push(gridBoxes[i].textContent);
    }
  }
  const nonRepeatLetters = new Set(markedLetters);
  const oCount = markedLetters.filter((letters) => letters === "O").length;
  if (
    markedLetters.length === 4 &&
    nonRepeatLetters.size === 3 &&
    nonRepeatLetters.has("F") &&
    nonRepeatLetters.has("D") &&
    oCount === 2
  ) {
    console.log("Yay, you saved the cat!");
  } else {
    console.log("Oh, no no no no...");
  }
}

function changeSubmitBtnColor() {
  submitBtn.classList.toggle("submit");
  // Black and white button
  submitBtn.addEventListener("click", () => {
    submitBtn.style.backgroundColor = "black";
    if (submitBtn.classList.contains("submit")) {
      submitBtn.style.backgroundColor = "rgb(245, 217, 59)";
    } else {
      submitBtn.style.backgroundColor = "black";
    }
    checkLetters();
  });
}
