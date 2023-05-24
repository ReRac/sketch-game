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
      if (number === 8) {
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

    let gridBoxes = document.querySelectorAll(".grid-box");
    for (let i = 0; i < gridBoxes.length; i++) {
      gridBoxes[i].addEventListener("mouseover", () => {
        gridBoxes[i].style.backgroundColor = bWColor;
      });
    }
  });
}

// color button
colorBtn.addEventListener("click", () => {
  let color = "blue";
  color = colorPicker.value;

  let gridBoxes = document.querySelectorAll(".grid-box");
  for (let i = 0; i < gridBoxes.length; i++) {
    gridBoxes[i].addEventListener("mouseover", () => {
      gridBoxes[i].style.backgroundColor = color;
    });
  }
});

resetBtn.addEventListener("click", function () {
  const rangeValue = (rangeInput.value = 15);
  gridContainer.innerHTML = "";
  createGrid(parseInt(rangeValue));
});

// disabled / enabled submit btn

function enableSubmitBtn() {
  submitBtn.style.opacity = "1";
  submitBtn.disabled = false;
}

function disabledSubmitBtn() {
  submitBtn.style.opacity = "0.5";
  submitBtn.disabled = true;
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
